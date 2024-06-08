import stream from 'stream';
import k8s from '@kubernetes/client-node';
import { k8sClient } from '$lib/k8s';

export async function GET({ params }) {
	const log = new k8s.Log(k8sClient);
	const logStream = new stream.PassThrough();

	const container = params.container;
	const namespace = params.namespace;
	const podName = params.pod;

	const req = await log.log(namespace, podName, container, logStream, {
		follow: true,
		tailLines: 50,
		pretty: true,
		timestamps: false
	});

	const encoder = new TextEncoder();
	const readable = new ReadableStream({
		async start(controller) {
			logStream.on('data', (chunk) => {
				controller.enqueue(encoder.encode(chunk.toString()));
			});
		},
		async cancel() {
			req.abort();
		}
	});

	return new Response(readable, {
		headers: {
			'content-type': 'text/event-stream'
		}
	});
}
