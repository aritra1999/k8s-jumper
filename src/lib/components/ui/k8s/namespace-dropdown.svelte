<script lang="ts">
	import _ from 'lodash';
	import SelectSearch from '$lib/components/ui/select-search/select-search.svelte';

	export let contexts;
	let selector = 'metadata.name';
	const namespaces = [
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'admin'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'admin',
				resourceVersion: '58329',
				uid: '983740de-51b8-416d-949e-3f4a4753143d'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-04-03T11:14:53.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'agile-tracking'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-04-03T11:14:53.000Z'
					}
				],
				name: 'agile-tracking',
				resourceVersion: '979248947',
				uid: '256a3b67-e0be-4bc3-8e7e-938010b3910a'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-06-05T09:03:30.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'ai-prototyping'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-06-05T09:03:30.000Z'
					}
				],
				name: 'ai-prototyping',
				resourceVersion: '1064241282',
				uid: 'c4533311-634b-4cec-882a-5329a3f03a44'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-05-03T07:19:58.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'aiassistant'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-05-03T07:19:58.000Z'
					}
				],
				name: 'aiassistant',
				resourceVersion: '609484574',
				uid: '6a84efd4-9788-4450-a4b8-3eb6bf9527e5'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'apptio-connector'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'apptio-connector',
				resourceVersion: '58194',
				uid: '0cf7a47d-cf9b-4f3a-b3ca-ad6bc0e3c5b6'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				annotations: {
					'kubectl.kubernetes.io/last-applied-configuration':
						'{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"name":"argocd"}}\n'
				},
				creationTimestamp: '2023-05-19T09:33:33.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'argocd'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:annotations': {
									'.': {},
									'f:kubectl.kubernetes.io/last-applied-configuration': {}
								},
								'f:labels': {
									'.': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'kubectl-client-side-apply',
						operation: 'Update',
						time: '2023-05-19T09:33:33.000Z'
					}
				],
				name: 'argocd',
				resourceVersion: '626209659',
				uid: '4291a20c-3cd9-4c55-863c-f15a54b00cd9'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'auth'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'auth',
				resourceVersion: '58317',
				uid: '941592c7-a880-4c51-bf13-618c9bc4c275'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-10-25T12:10:09.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'automation-workflow'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-10-25T12:10:09.000Z'
					}
				],
				name: 'automation-workflow',
				resourceVersion: '428224093',
				uid: 'd6033297-c642-49df-a62a-af1c5cd765b9'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-12-17T14:59:58.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'automations'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-12-17T14:59:58.000Z'
					}
				],
				name: 'automations',
				resourceVersion: '101816404',
				uid: '471a4703-2a5c-41b7-bd5e-8b4218d6e20a'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T08:24:35.000Z',
				labels: {
					'control-plane': 'true',
					'kubernetes.io/metadata.name': 'calico-system',
					name: 'calico-system',
					'pod-security.kubernetes.io/enforce': 'privileged',
					'pod-security.kubernetes.io/enforce-version': 'latest'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:control-plane': {},
									'f:name': {},
									'f:pod-security.kubernetes.io/enforce': {},
									'f:pod-security.kubernetes.io/enforce-version': {}
								},
								'f:ownerReferences': {
									'.': {},
									'k:{"uid":"46327257-88c2-43f7-8667-b7ebe7939b2f"}': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'operator',
						operation: 'Update',
						time: '2023-03-06T09:39:23.000Z'
					}
				],
				name: 'calico-system',
				ownerReferences: [
					{
						apiVersion: 'operator.tigera.io/v1',
						blockOwnerDeletion: true,
						controller: true,
						kind: 'Installation',
						name: 'default',
						uid: '46327257-88c2-43f7-8667-b7ebe7939b2f'
					}
				],
				resourceVersion: '551002491',
				uid: '634af817-200e-4423-83f1-b3958544c264'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'camunda'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'camunda',
				resourceVersion: '58253',
				uid: '1836a4fe-8f9d-496a-b63a-b79a679f76c0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-02-12T14:15:35.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'catalog-matching'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-02-12T14:15:35.000Z'
					}
				],
				name: 'catalog-matching',
				resourceVersion: '909782040',
				uid: 'd680952e-a14f-44e3-8d17-92d3e04bb7d5'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'cicd-connector-v2'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'cicd-connector-v2',
				resourceVersion: '58249',
				uid: '60309817-34c3-40d3-9e24-1e698017f7b8'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'cloud-connector'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'cloud-connector',
				resourceVersion: '58328',
				uid: '6db08381-0597-4481-9ad4-41f512e35fba'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'confluence-cloud'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'confluence-cloud',
				resourceVersion: '58124',
				uid: '8707b5e6-4195-440d-8bff-bb86e546ffa0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'data-opt-in'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'data-opt-in',
				resourceVersion: '58265',
				uid: 'e585431f-c789-4a31-bbb0-4b31aed1efb1'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-04-24T09:30:36.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'decisions'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-04-24T09:30:36.000Z'
					}
				],
				name: 'decisions',
				resourceVersion: '1007256635',
				uid: 'b271256a-9495-4a39-b72c-ccdaf7e67a5f'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T08:22:00.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'default'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kube-apiserver',
						operation: 'Update',
						time: '2021-08-16T08:22:00.000Z'
					}
				],
				name: 'default',
				resourceVersion: '199',
				uid: 'dd4109a6-0281-420b-a998-80327829336b'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'diagrams'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'diagrams',
				resourceVersion: '58263',
				uid: '4927913f-0485-495d-8817-94ae0a83fcb7'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-11-15T12:38:33.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'discovery-linking'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-11-15T12:38:33.000Z'
					}
				],
				name: 'discovery-linking',
				resourceVersion: '813660968',
				uid: 'df75a443-fb3f-40d6-947c-833d4411e9c0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-11-15T12:38:33.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'discovery-saas'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-11-15T12:38:33.000Z'
					}
				],
				name: 'discovery-saas',
				resourceVersion: '813660967',
				uid: '1965c0bb-6107-4a29-ae81-fb72a4a0c152'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-11-17T10:40:54.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'discovery-sap'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-11-17T10:40:54.000Z'
					}
				],
				name: 'discovery-sap',
				resourceVersion: '815732007',
				uid: '2bf2df39-f492-4965-80b7-48a21cc76316'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-09-03T11:32:14.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'ea-provisioning'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-09-03T11:32:14.000Z'
					}
				],
				name: 'ea-provisioning',
				resourceVersion: '10034737',
				uid: 'f4fd8f40-7278-4db7-acea-67e41281fc60'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-04-30T14:19:28.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'embedded-analytics'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-04-30T14:19:28.000Z'
					}
				],
				name: 'embedded-analytics',
				resourceVersion: '1015638765',
				uid: '08b17908-37f2-4a5a-a43a-518d9877cd76'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-05-10T13:42:43.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'embeddings-service'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-05-10T13:42:43.000Z'
					}
				],
				name: 'embeddings-service',
				resourceVersion: '1028989906',
				uid: '18df3730-0332-47b9-954f-57a96d1ce826'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'etsi'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'etsi',
				resourceVersion: '58099',
				uid: '9cd54cbb-7709-4532-a6b6-359d7041f7d9'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'event-collector'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'event-collector',
				resourceVersion: '58090',
				uid: '413fd826-d694-469c-b049-44c84d141ce0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-01-30T14:51:19.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'event-mirror'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-01-30T14:51:19.000Z'
					}
				],
				name: 'event-mirror',
				resourceVersion: '517154942',
				uid: 'beea775b-1865-4e41-ac36-1b64a8ad1fc0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-07-12T13:39:27.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'event-stream-explorer'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-07-12T13:39:27.000Z'
					}
				],
				name: 'event-stream-explorer',
				resourceVersion: '325727499',
				uid: '0c6d865a-79fe-4741-a25a-0de6314f3bde'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-11-30T05:54:31.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'exec-dashboard'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-11-30T05:54:31.000Z'
					}
				],
				name: 'exec-dashboard',
				resourceVersion: '829351612',
				uid: 'b8a5ebd3-22a0-4f50-8d7c-93533ea2c46b'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'export-v2'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'export-v2',
				resourceVersion: '58205',
				uid: '46464180-45a0-487b-8654-6b3f50e94542'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-11-30T15:05:28.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'froxy'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-11-30T15:05:28.000Z'
					}
				],
				name: 'froxy',
				resourceVersion: '460630725',
				uid: '411d9649-f2db-463b-82b4-b36afdb3ba25'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				annotations: {
					'kubectl.kubernetes.io/last-applied-configuration':
						'{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"labels":{"addonmanager.kubernetes.io/mode":"Reconcile","admission.gatekeeper.sh/ignore":"no-self-managing","control-plane":"controller-manager","gatekeeper.sh/system":"yes","kubernetes.azure.com/managedby":"aks"},"name":"gatekeeper-system"}}\n'
				},
				creationTimestamp: '2023-06-21T21:18:46.000Z',
				labels: {
					'addonmanager.kubernetes.io/mode': 'Reconcile',
					'admission.gatekeeper.sh/ignore': 'no-self-managing',
					'control-plane': 'controller-manager',
					'gatekeeper.sh/system': 'yes',
					'kubernetes.azure.com/managedby': 'aks',
					'kubernetes.io/metadata.name': 'gatekeeper-system'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:annotations': {
									'.': {},
									'f:kubectl.kubernetes.io/last-applied-configuration': {}
								},
								'f:labels': {
									'.': {},
									'f:addonmanager.kubernetes.io/mode': {},
									'f:admission.gatekeeper.sh/ignore': {},
									'f:control-plane': {},
									'f:gatekeeper.sh/system': {},
									'f:kubernetes.azure.com/managedby': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'kubectl-client-side-apply',
						operation: 'Update',
						time: '2023-09-23T00:15:57.000Z'
					}
				],
				name: 'gatekeeper-system',
				resourceVersion: '756850173',
				uid: '45f81b06-18b4-4528-b2d3-52c14dad79b4'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-10-23T07:55:19.000Z',
				labels: {
					app: 'geo-blocking',
					'kubernetes.io/metadata.name': 'geo-blocking'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:app': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-10-23T07:55:19.000Z'
					}
				],
				name: 'geo-blocking',
				resourceVersion: '788031406',
				uid: '4a2cf85f-5e7e-46b6-8c68-358bfa035e50'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-06-27T15:26:57.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'grafana-cloud'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-07-04T12:51:04.000Z'
					}
				],
				name: 'grafana-cloud',
				resourceVersion: '316894547',
				uid: 'f7c038f3-9646-40ec-bb57-6ebe5c4e836c'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-02-10T13:29:38.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'graphql-gateway'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-02-10T13:29:38.000Z'
					}
				],
				name: 'graphql-gateway',
				resourceVersion: '527601575',
				uid: 'a44c724b-6c29-4fe8-b0f1-813a6501996d'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'idp-login-ui'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'idp-login-ui',
				resourceVersion: '58164',
				uid: 'f92ce1c7-8859-472c-af2c-1293c32ee9b6'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'impacts'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'impacts',
				resourceVersion: '58321',
				uid: 'e92f3717-a4a5-4277-ad7c-c2f51e77ff01'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'import-export'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'import-export',
				resourceVersion: '58269',
				uid: '3ff7fa82-a312-4782-b585-2f577b03fc56'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'integration-api'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'integration-api',
				resourceVersion: '58118',
				uid: '5790224d-b8be-4d2f-bce8-81267c8d3acd'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-11-30T09:27:39.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'integration-collibra'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-11-30T09:27:39.000Z'
					}
				],
				name: 'integration-collibra',
				resourceVersion: '460404440',
				uid: '085bcf5c-82a3-44fe-90d8-42b1138c9e5f'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'integration-hub'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'integration-hub',
				resourceVersion: '58257',
				uid: '469d0765-4312-41fa-bbbe-a0bf130f9964'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-02-03T14:10:38.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'integration-servicenow'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-02-03T14:10:38.000Z'
					}
				],
				name: 'integration-servicenow',
				resourceVersion: '146050567',
				uid: '7613e058-b748-4df1-8114-4be6d7a2f67b'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-09-24T06:08:23.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'integration-signavio'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-09-24T06:08:23.000Z'
					}
				],
				name: 'integration-signavio',
				resourceVersion: '26790933',
				uid: '825b4624-2191-4c76-84cb-2634be417123'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-05-18T07:32:06.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'integration-vsm-eam'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-05-18T07:32:06.000Z'
					}
				],
				name: 'integration-vsm-eam',
				resourceVersion: '264037168',
				uid: '35b74ead-037b-4272-b0f6-312bf059cc38'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T09:13:03.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'istio'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kubectl-create',
						operation: 'Update',
						time: '2021-08-16T09:13:03.000Z'
					}
				],
				name: 'istio',
				resourceVersion: '838127040',
				uid: '1cc03d81-da1c-42fa-8a16-1d855c63917c'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T09:11:52.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'istio-system'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kubectl-create',
						operation: 'Update',
						time: '2021-08-16T09:11:52.000Z'
					},
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {}
							}
						},
						manager: 'kubectl-label',
						operation: 'Update',
						time: '2021-08-16T10:26:39.000Z'
					}
				],
				name: 'istio-system',
				resourceVersion: '23433766',
				uid: '8f358e39-0e51-4c55-bbd3-ef41b55da840'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'jira-cloud'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'jira-cloud',
				resourceVersion: '58266',
				uid: '1b85dfbf-233d-4b81-9b32-f5b261d8779e'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-12-16T15:20:25.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'k8s-connector'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-12-16T15:20:25.000Z'
					}
				],
				name: 'k8s-connector',
				resourceVersion: '100949300',
				uid: 'b2d5dd11-2bd0-4818-9564-ebe579c00a19'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T08:25:32.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'keda'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T08:25:32.000Z'
					}
				],
				name: 'keda',
				resourceVersion: '23433699',
				uid: '3344588e-94c5-437e-8444-241230079587'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T08:21:57.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'kube-node-lease'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kube-apiserver',
						operation: 'Update',
						time: '2021-08-16T08:21:57.000Z'
					}
				],
				name: 'kube-node-lease',
				resourceVersion: '54',
				uid: '34d3fb1f-001b-47c8-965d-afd8ecd8493b'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T08:21:57.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'kube-public'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kube-apiserver',
						operation: 'Update',
						time: '2021-08-16T08:21:57.000Z'
					}
				],
				name: 'kube-public',
				resourceVersion: '36',
				uid: '2eb48434-c472-42f7-965e-109e5b15ba8e'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				annotations: {
					'kubectl.kubernetes.io/last-applied-configuration':
						'{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"labels":{"addonmanager.kubernetes.io/mode":"Reconcile","control-plane":"true","kubernetes.azure.com/managedby":"aks","kubernetes.io/cluster-service":"true"},"name":"kube-system"}}\n'
				},
				creationTimestamp: '2021-08-16T08:21:57.000Z',
				labels: {
					'addonmanager.kubernetes.io/mode': 'Reconcile',
					'admission.gatekeeper.sh/ignore': 'no-self-managing',
					'control-plane': 'true',
					'kubernetes.azure.com/managedby': 'aks',
					'kubernetes.io/cluster-service': 'true',
					'kubernetes.io/metadata.name': 'kube-system'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kube-apiserver',
						operation: 'Update',
						time: '2021-08-16T08:21:57.000Z'
					},
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'f:admission.gatekeeper.sh/ignore': {}
								}
							}
						},
						manager: 'kubectl-label',
						operation: 'Update',
						time: '2021-08-16T10:26:38.000Z'
					},
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:annotations': {
									'.': {},
									'f:kubectl.kubernetes.io/last-applied-configuration': {}
								},
								'f:labels': {
									'.': {},
									'f:addonmanager.kubernetes.io/mode': {},
									'f:control-plane': {},
									'f:kubernetes.azure.com/managedby': {},
									'f:kubernetes.io/cluster-service': {}
								}
							}
						},
						manager: 'kubectl-client-side-apply',
						operation: 'Update',
						time: '2023-09-23T00:15:58.000Z'
					}
				],
				name: 'kube-system',
				resourceVersion: '756850204',
				uid: 'e8d8440d-a6b4-405e-9df1-226b9da5e6e7'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-09-05T09:57:19.000Z',
				labels: {
					app: 'fluent-bit',
					'kubernetes.io/metadata.name': 'logging'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:app': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-09-05T09:57:19.000Z'
					}
				],
				name: 'logging',
				resourceVersion: '383813244',
				uid: '3d2581a3-35d2-4125-99ee-e3fedfccc27a'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'ltls'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'ltls',
				resourceVersion: '58221',
				uid: 'b959d2a3-e31c-4bd5-9109-b448d938bdd8'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'ltls-fpe'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'ltls-fpe',
				resourceVersion: '58287',
				uid: '57b3b8b9-fb50-497c-a7ff-c23b9984b464'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'ltls-trp'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'ltls-trp',
				resourceVersion: '58285',
				uid: '9e345a73-3ce2-49cd-90d8-b55e0b1b60b0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'mars'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'mars',
				resourceVersion: '58075',
				uid: 'c9559c2c-9e80-4a75-a326-ce31d3288be3'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'metrics-v2'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'metrics-v2',
				resourceVersion: '58193',
				uid: '0af7e619-af1a-4b53-93c0-eb428de470ba'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-02-01T13:52:42.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'monitoring'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-02-01T13:52:42.000Z'
					}
				],
				name: 'monitoring',
				resourceVersion: '519060660',
				uid: '1bda5abd-8484-4fb3-9b00-56240e5bfa7a'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-25T11:55:51.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'mtm'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-25T11:55:51.000Z'
					}
				],
				name: 'mtm',
				resourceVersion: '4657601',
				uid: 'ee31b81c-26ed-43f5-af66-2a48e0e93e22'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'navigation'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'navigation',
				resourceVersion: '58268',
				uid: 'e1052453-923b-4b59-a47d-6f74e53e34f4'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-10-02T15:02:41.000Z',
				labels: {
					'kubernetes.io/metadata.name': 'nginx-ingress'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-10-02T15:02:41.000Z'
					}
				],
				name: 'nginx-ingress',
				resourceVersion: '766689320',
				uid: '9f9d15ed-7c15-4df0-907d-75c4b2d9c8cd'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:12.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'notifications'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:12.000Z'
					}
				],
				name: 'notifications',
				resourceVersion: '58341',
				uid: '0f82d771-aa43-48d8-9e17-e49c6a1658b7'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-05-19T15:08:37.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'oauth-entrypoint'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-05-19T15:08:37.000Z'
					}
				],
				name: 'oauth-entrypoint',
				resourceVersion: '626452672',
				uid: 'cb9b2c96-e069-49d3-b321-d6703be5bd7c'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-05-31T14:50:18.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'open-ai'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-05-31T14:50:18.000Z'
					},
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'f:istio-injection': {}
								}
							}
						},
						manager: 'kubectl-edit',
						operation: 'Update',
						time: '2023-06-14T18:46:33.000Z'
					}
				],
				name: 'open-ai',
				resourceVersion: '653154315',
				uid: '54e12ed5-d938-44ad-b46d-f7dee9db9bc4'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'opportunity'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'opportunity',
				resourceVersion: '58144',
				uid: '3a6d0fca-f203-4b93-a861-7cd1f5d33b73'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'pathfinder-api'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'pathfinder-api',
				resourceVersion: '58114',
				uid: '2a592416-b4ce-4ac8-9907-b550957bff55'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-01-10T15:16:22.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'pmg-workspace-provisioner'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-01-10T15:16:22.000Z'
					}
				],
				name: 'pmg-workspace-provisioner',
				resourceVersion: '872868980',
				uid: '037cdd5e-20ab-479b-998f-28df99c3898f'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'provisioning'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'provisioning',
				resourceVersion: '58220',
				uid: '0fdcec58-558e-4ce6-91c9-22c7adb5266d'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'recon'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'recon',
				resourceVersion: '58094',
				uid: '18b83049-8c45-4777-bdfc-6e17e79a4fac'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-05-15T07:27:51.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'reference-catalog-automation'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-05-15T07:27:51.000Z'
					}
				],
				name: 'reference-catalog-automation',
				resourceVersion: '621902815',
				uid: '40adb9da-efa9-4e0f-a176-3084b85758c2'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-12-05T13:26:43.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'reference-catalogs'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-12-05T13:26:43.000Z'
					}
				],
				name: 'reference-catalogs',
				resourceVersion: '834938521',
				uid: '75753a70-58ba-4641-ad47-b3009d732965'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'reference-data'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'reference-data',
				resourceVersion: '58125',
				uid: 'cf3a4433-a67e-44d9-b628-566473fc53ae'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-04-03T11:14:53.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'research-catalogs'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-04-03T11:14:53.000Z'
					}
				],
				name: 'research-catalogs',
				resourceVersion: '979248946',
				uid: '5630dde4-4b61-4eff-a182-a63a3332270a'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-01-11T14:03:19.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'saas-discovery'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-01-11T14:03:19.000Z'
					}
				],
				name: 'saas-discovery',
				resourceVersion: '499353336',
				uid: 'ab0fcb7c-4bd0-4bfc-bb7d-6c563404fb98'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'saasuggest'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'saasuggest',
				resourceVersion: '58186',
				uid: '7e9581e8-7953-44f6-aa79-b323d8f459f5'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'si'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'si',
				resourceVersion: '58197',
				uid: '0ff2d4d3-83ac-4822-8b71-913379767069'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-02-18T10:12:22.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'si-aggregator'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-02-18T10:12:22.000Z'
					}
				],
				name: 'si-aggregator',
				resourceVersion: '160422307',
				uid: '5cad9863-a66a-416b-8025-11d763de0dc1'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-07-17T09:41:31.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'si-ami'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-07-17T09:41:31.000Z'
					}
				],
				name: 'si-ami',
				resourceVersion: '686675338',
				uid: '01cb3f5b-0fd4-4d47-ade1-a53b902850c0'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'si-backoffice-app'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'si-backoffice-app',
				resourceVersion: '58240',
				uid: '23ee5ae2-70ab-420c-a88e-81311c09fe83'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-05-06T08:12:28.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'si-discover-etl'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-05-06T08:12:28.000Z'
					}
				],
				name: 'si-discover-etl',
				resourceVersion: '250305502',
				uid: 'b660af0e-b618-448d-9e3b-a94d6eb63551'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-03-23T13:09:02.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'si-grafana'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-03-23T13:09:02.000Z'
					}
				],
				name: 'si-grafana',
				resourceVersion: '199554159',
				uid: 'b988cae1-0b38-4e23-8737-54b8c5435eb1'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-08-31T08:20:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'signin'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-08-31T08:20:11.000Z'
					}
				],
				name: 'signin',
				resourceVersion: '733480152',
				uid: 'da51f12f-b03a-4ba6-b7e8-3e8b1de95e18'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-02-24T15:41:18.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'snapshot-manager'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-02-24T15:41:18.000Z'
					}
				],
				name: 'snapshot-manager',
				resourceVersion: '166972646',
				uid: 'e5a77ae9-0a65-4211-80ac-3b36e5a87c41'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-05-24T15:27:41.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'snapshot-worker'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-05-24T15:27:41.000Z'
					}
				],
				name: 'snapshot-worker',
				resourceVersion: '271165660',
				uid: '81b2ed9b-afbe-4827-90e1-19c29c612740'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-08-23T11:22:48.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'storage'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-08-23T11:22:48.000Z'
					}
				],
				name: 'storage',
				resourceVersion: '369943564',
				uid: '521afa55-be75-4f8c-be95-a41d77939436'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-01-30T11:46:29.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'survey'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-01-30T11:46:29.000Z'
					}
				],
				name: 'survey',
				resourceVersion: '517034657',
				uid: 'efe5f9af-aaa0-4c79-a40e-33e18b433f2e'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-10-24T11:32:14.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'synclog'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-10-24T11:32:14.000Z'
					}
				],
				name: 'synclog',
				resourceVersion: '427317475',
				uid: 'bb30867d-cbe2-4d67-973b-0905ad2385c1'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-08-03T07:12:40.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'teams-chat-bot'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-08-03T07:12:40.000Z'
					}
				],
				name: 'teams-chat-bot',
				resourceVersion: '704163157',
				uid: '499e6bcc-a3d5-4af4-8625-ff364c291c08'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2024-03-04T12:36:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'teams-chat-bot-global'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2024-03-04T12:36:11.000Z'
					}
				],
				name: 'teams-chat-bot-global',
				resourceVersion: '939122279',
				uid: '7a611fde-7cfc-4b4f-a964-07fd94c2bf0f'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'technolot'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:11.000Z'
					}
				],
				name: 'technolot',
				resourceVersion: '58203',
				uid: '6cff6199-fade-47ba-a613-44339a634171'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				annotations: {
					'kubectl.kubernetes.io/last-applied-configuration':
						'{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"labels":{"addonmanager.kubernetes.io/mode":"Reconcile","control-plane":"true","kubernetes.azure.com/managedby":"aks","name":"tigera-operator"},"name":"tigera-operator"}}\n'
				},
				creationTimestamp: '2021-08-16T08:22:32.000Z',
				labels: {
					'addonmanager.kubernetes.io/mode': 'Reconcile',
					'admission.gatekeeper.sh/ignore': 'no-self-managing',
					'control-plane': 'true',
					'kubernetes.azure.com/managedby': 'aks',
					'kubernetes.io/metadata.name': 'tigera-operator',
					name: 'tigera-operator'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'f:admission.gatekeeper.sh/ignore': {}
								}
							}
						},
						manager: 'kubectl-label',
						operation: 'Update',
						time: '2021-08-16T10:26:43.000Z'
					},
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:annotations': {
									'.': {},
									'f:kubectl.kubernetes.io/last-applied-configuration': {}
								},
								'f:labels': {
									'.': {},
									'f:addonmanager.kubernetes.io/mode': {},
									'f:control-plane': {},
									'f:kubernetes.azure.com/managedby': {},
									'f:name': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'kubectl-client-side-apply',
						operation: 'Update',
						time: '2023-09-23T00:15:59.000Z'
					}
				],
				name: 'tigera-operator',
				resourceVersion: '756850257',
				uid: 'f165042d-9ab6-4e63-9ae2-9d3df3446e8e'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'todo'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'todo',
				resourceVersion: '58142',
				uid: '95edeeb8-648e-4a71-8a66-ba8db873279b'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-08-16T12:07:10.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'torg'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {}
								}
							},
							'f:status': {
								'f:phase': {}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-08-16T12:07:10.000Z'
					}
				],
				name: 'torg',
				resourceVersion: '58101',
				uid: 'a2b1ca91-c252-4db4-86d0-37ec121b53e8'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2021-11-11T14:43:09.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'transformations'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2021-11-11T14:43:09.000Z'
					}
				],
				name: 'transformations',
				resourceVersion: '68689594',
				uid: 'c1d9f978-9864-48ca-9d31-9aaa5166ecc8'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-12-08T12:50:05.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'trc-data-digest'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-12-08T12:50:05.000Z'
					}
				],
				name: 'trc-data-digest',
				resourceVersion: '838084708',
				uid: '0b30f3a7-f595-4d87-b0b7-4d0acb4c9543'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-04-07T07:51:45.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vault'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-07-28T13:51:56.000Z'
					}
				],
				name: 'vault',
				resourceVersion: '698285743',
				uid: 'dccdb2b3-b2ea-4104-9d87-46cb9025b994'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-04-26T08:02:37.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-canopy'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-04-26T08:02:37.000Z'
					}
				],
				name: 'vsm-canopy',
				resourceVersion: '239099031',
				uid: '0503a02d-ed42-4c81-8a92-4bb31cc96290'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-02-14T11:13:53.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-canopy-state'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-02-14T11:13:53.000Z'
					}
				],
				name: 'vsm-canopy-state',
				resourceVersion: '531293751',
				uid: 'a1a32abb-f84d-411e-8afd-d8bd0e4119b2'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-11-14T08:45:23.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-cloud-scanner'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-11-14T08:45:23.000Z'
					}
				],
				name: 'vsm-cloud-scanner',
				resourceVersion: '445632356',
				uid: 'ae6e4d1c-3e20-4cd6-a9ec-8988c5584360'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-08-16T07:51:27.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-collector'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-08-16T07:51:27.000Z'
					}
				],
				name: 'vsm-collector',
				resourceVersion: '362253543',
				uid: 'ac254b4c-d487-49d4-aeab-9c329f8905f1'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-05-13T12:05:29.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-companion'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-05-13T12:05:29.000Z'
					}
				],
				name: 'vsm-companion',
				resourceVersion: '258666668',
				uid: 'f71960a6-399f-4e0c-9c29-c2d3746963dc'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-04-06T12:42:55.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-compass'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-04-06T12:42:55.000Z'
					}
				],
				name: 'vsm-compass',
				resourceVersion: '216997252',
				uid: 'bc97cebe-9597-48a5-97e2-36c542938b48'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-04-26T08:02:37.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-discovery'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-04-26T08:02:37.000Z'
					}
				],
				name: 'vsm-discovery',
				resourceVersion: '239099030',
				uid: '43d98a96-f4bc-4a46-9415-6362ee6a8acd'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-08-02T09:54:53.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-dora'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-08-02T09:54:53.000Z'
					}
				],
				name: 'vsm-dora',
				resourceVersion: '347472425',
				uid: 'd8910d34-3bcd-43a1-bd86-4bdfc40506ca'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-09-12T12:23:43.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-dora-events'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-09-12T12:23:43.000Z'
					}
				],
				name: 'vsm-dora-events',
				resourceVersion: '390118054',
				uid: '61e8f5a6-e3d6-4184-a277-70326354e5f5'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-04-12T13:12:58.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-file-manager'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-04-12T13:12:58.000Z'
					}
				],
				name: 'vsm-file-manager',
				resourceVersion: '587932198',
				uid: '862ca6af-59c2-4931-8ffc-2efe04f40499'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2022-05-13T12:05:29.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-iris'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2022-05-13T12:05:29.000Z'
					}
				],
				name: 'vsm-iris',
				resourceVersion: '258666669',
				uid: '9124af7e-688b-425c-8d9e-b0024e2a35e9'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-01-30T12:35:01.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'vsm-pagerduty'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-01-30T12:35:01.000Z'
					}
				],
				name: 'vsm-pagerduty',
				resourceVersion: '517066206',
				uid: '461b6e83-59c4-49a3-ad3a-9c127fa411e4'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		},
		{
			metadata: {
				creationTimestamp: '2023-09-29T12:37:11.000Z',
				labels: {
					'istio-injection': 'enabled',
					'kubernetes.io/metadata.name': 'webhooks'
				},
				managedFields: [
					{
						apiVersion: 'v1',
						fieldsType: 'FieldsV1',
						fieldsV1: {
							'f:metadata': {
								'f:labels': {
									'.': {},
									'f:istio-injection': {},
									'f:kubernetes.io/metadata.name': {}
								}
							}
						},
						manager: 'HashiCorp',
						operation: 'Update',
						time: '2023-09-29T12:37:11.000Z'
					}
				],
				name: 'webhooks',
				resourceVersion: '763537232',
				uid: 'c62d356a-8058-4bc4-bf9e-1d6a7e51cceb'
			},
			spec: {
				finalizers: ['kubernetes']
			},
			status: {
				phase: 'Active'
			}
		}
	];
	const selectSearchNamespaces = namespaces.map((namespace) => {
		return {
			label: _.get(namespace, selector),
			value: _.get(namespace, selector)
		};
	});
</script>

<div class="h-full">
	<SelectSearch items={selectSearchNamespaces} />
</div>
