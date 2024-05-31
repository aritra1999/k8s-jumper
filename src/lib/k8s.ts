import * as k8s from '@kubernetes/client-node';

export const k8sClient = new k8s.KubeConfig();
k8sClient.loadFromDefault();

export const k8sApi = k8sClient.makeApiClient(k8s.CoreV1Api);

export const switchContext = (newContext: string) => {
	k8sClient.setCurrentContext(newContext);
};

// let obj = await this.k8sApi.readNamespacedPodLog(podName,this.ns,containername,true)
// obj.response.on('data',(chunk) => {
//     console.log(chunk.toString())
// })
