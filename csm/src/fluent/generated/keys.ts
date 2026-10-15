import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1ce1e643115644b5aa4bbd355448c908'
                    }
                    'br-case-closed-by': {
                        table: 'sys_script'
                        id: 'b655659caba04ab3adca5e7f06e1d2d3'
                    }
                    'br-case-hw-tasks': {
                        table: 'sys_script'
                        id: '0a36e0d528564e38a625368dc38cea39'
                    }
                    'br-case-install-base': {
                        table: 'sys_script'
                        id: '292da31cf3ff4bafbecff524ee3ceb7f'
                    }
                    'br-task-resolve-case': {
                        table: 'sys_script'
                        id: 'c201660ce5814e98893244d95007386e'
                    }
                    'ds-account': {
                        table: 'sys_data_source'
                        id: '8f122e8d4e094f34b7c8095935512500'
                    }
                    'ds-asset': {
                        table: 'sys_data_source'
                        id: 'e79dd7066d044f2193da34130f91de09'
                    }
                    'ds-contact': {
                        table: 'sys_data_source'
                        id: '8e2a3a1aaf834e06874ffc1e691ea9ea'
                    }
                    'ds-contract': {
                        table: 'sys_data_source'
                        id: '9221377079924765ab3986ed3683060e'
                    }
                    'ds-entitlement': {
                        table: 'sys_data_source'
                        id: '61b7fdae1c6340ef8f8f62fcc3773893'
                    }
                    'ds-group': {
                        table: 'sys_data_source'
                        id: '8ecb8c2b960e4976afc0ef018c983573'
                    }
                    'ds-group_member': {
                        table: 'sys_data_source'
                        id: 'd1ce6580b20b4b069002a50a6392218c'
                    }
                    'ds-install_base_item': {
                        table: 'sys_data_source'
                        id: '1bc57940329243c0940be1335e41d8c9'
                    }
                    'ds-installed_product': {
                        table: 'sys_data_source'
                        id: '0e65bf3c9c6348ea90abe8792160f091'
                    }
                    'ds-location': {
                        table: 'sys_data_source'
                        id: '848ed127eaac4568834b20ba76eb7034'
                    }
                    'ds-product_model': {
                        table: 'sys_data_source'
                        id: 'ad7f070e9e98438caeda396b0e9a95d0'
                    }
                    'ds-sold_product': {
                        table: 'sys_data_source'
                        id: '1215f1831e7c4471a2dac1c26090ee1f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9f289914e6f242f6acdae9583e16e774'
                    }
                    'portal-csmgnd': {
                        table: 'sp_portal'
                        id: 'a6ef65a1dd934e43ad39ebb50260e435'
                    }
                    'sched-geo': {
                        table: 'cmn_schedule'
                        id: '1e9b3f5d41f14f839adfbd60c24e2d84'
                    }
                    'sched-geo-span': {
                        table: 'cmn_schedule_span'
                        id: '51bcf72130ef4e4d8255205def48a566'
                    }
                    'sched-lva': {
                        table: 'cmn_schedule'
                        id: 'd08cebb810684219a2c365dbfe60176b'
                    }
                    'sched-lva-span': {
                        table: 'cmn_schedule_span'
                        id: 'b49bfdebdf42458cb0dd92f914e5aeff'
                    }
                    'si-case-filters': {
                        table: 'sys_script_include'
                        id: '51a5b2c8213a46949928f964df64b2e9'
                    }
                    'sla-geo-resolution-p1': {
                        table: 'contract_sla'
                        id: '183394a09098425daee5c40d2edcc796'
                    }
                    'sla-geo-resolution-p2': {
                        table: 'contract_sla'
                        id: '88dea1b3ffb14209881c8ee0918e510a'
                    }
                    'sla-geo-resolution-p3': {
                        table: 'contract_sla'
                        id: 'f39dbaeb5e1a4e02bc61debf47c92407'
                    }
                    'sla-geo-resolution-p4': {
                        table: 'contract_sla'
                        id: '717538b8c00a43a197e9b448f0d131bf'
                    }
                    'sla-geo-response-p1': {
                        table: 'contract_sla'
                        id: 'd872725614e94f6589e31880ebca6da3'
                    }
                    'sla-geo-response-p2': {
                        table: 'contract_sla'
                        id: 'c3a18dfb18054cce83847d6eee5c5d48'
                    }
                    'sla-geo-response-p3': {
                        table: 'contract_sla'
                        id: 'f493325e406244d5a60223fed2222216'
                    }
                    'sla-geo-response-p4': {
                        table: 'contract_sla'
                        id: '192c15a609514ed18403e7e6ef21ba2a'
                    }
                    'sla-lva-resolution-p1': {
                        table: 'contract_sla'
                        id: '873328f031474402882a9bc9f2e1e0bc'
                    }
                    'sla-lva-resolution-p2': {
                        table: 'contract_sla'
                        id: 'e956ab311c2146b39e6194430e684372'
                    }
                    'sla-lva-resolution-p3': {
                        table: 'contract_sla'
                        id: '0167de0b72bc45388169e81c95bb38b3'
                    }
                    'sla-lva-resolution-p4': {
                        table: 'contract_sla'
                        id: '6a0590c530af478691c3109e3b0b1e8b'
                    }
                    'sla-lva-response-p1': {
                        table: 'contract_sla'
                        id: '155c64bf0d714538ab72ec291e3224e1'
                    }
                    'sla-lva-response-p2': {
                        table: 'contract_sla'
                        id: '68b691e96cc64d0a97d3887dfc827aea'
                    }
                    'sla-lva-response-p3': {
                        table: 'contract_sla'
                        id: '08ac0fe2636e4bd08f7c5e8ecbad4651'
                    }
                    'sla-lva-response-p4': {
                        table: 'contract_sla'
                        id: '5af5ffa82818443bad4b3050cf8bbae7'
                    }
                    'sla-resolution-p1': {
                        table: 'contract_sla'
                        id: 'bb878b3b925a4a908552e73217dfcdd0'
                    }
                    'sla-resolution-p2': {
                        table: 'contract_sla'
                        id: '4b3046bfc44a4124a01ffce90e7a375e'
                    }
                    'sla-resolution-p3': {
                        table: 'contract_sla'
                        id: '28c4a41f0e024b949b4d658622b48aea'
                    }
                    'sla-resolution-p4': {
                        table: 'contract_sla'
                        id: 'bfa5f885082d44949c50c98290270af9'
                    }
                    'sla-response-p1': {
                        table: 'contract_sla'
                        id: '604a6eac07794304be7c2badc48accf0'
                    }
                    'sla-response-p2': {
                        table: 'contract_sla'
                        id: '395cee5661b34a36a8042a8cf90d406e'
                    }
                    'sla-response-p3': {
                        table: 'contract_sla'
                        id: 'ca0793c6c42b4692a214c01850bd4fa4'
                    }
                    'sla-response-p4': {
                        table: 'contract_sla'
                        id: '466558fea4c545fc91f3ace19236ca47'
                    }
                    'sla-task-remove_return': {
                        table: 'contract_sla'
                        id: 'a99b316d68d94d5086373598a43681c6'
                    }
                    'sla-task-repair_tracking': {
                        table: 'contract_sla'
                        id: '4bc9fdd66845492ea49f4a0247eb325c'
                    }
                    'sla-task-ship_install': {
                        table: 'contract_sla'
                        id: '39d83c07b1404a889723f97cd5e13177'
                    }
                    'src_server_case-rules_ts': {
                        table: 'sys_module'
                        id: 'b32b37c09fdd4c52b44d56b18befb501'
                    }
                    'tm-account': {
                        table: 'sys_transform_map'
                        id: '05ce3e52d153431ba9d57b5b08479178'
                    }
                    'tm-account-after': {
                        table: 'sys_transform_script'
                        id: '04475756f2b34b768134d5eca7f46cab'
                    }
                    'tm-account-validate': {
                        table: 'sys_transform_script'
                        id: '033b6da9512047f58348724efdc92cac'
                    }
                    'tm-asset': {
                        table: 'sys_transform_map'
                        id: '574a68fc07a5486598c60f480d7f584d'
                    }
                    'tm-asset-validate': {
                        table: 'sys_transform_script'
                        id: '6eca435f3dc04d1f8dd4d76e52300d25'
                    }
                    'tm-contact': {
                        table: 'sys_transform_map'
                        id: '4828a5ec86824caeade5c015a3a5a02b'
                    }
                    'tm-contact-validate': {
                        table: 'sys_transform_script'
                        id: 'ce631dbf93484acfbdbe6fc8bfcd8b64'
                    }
                    'tm-contract': {
                        table: 'sys_transform_map'
                        id: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                    }
                    'tm-contract-validate': {
                        table: 'sys_transform_script'
                        id: '13f09e67459a437c94b55289a822c3fe'
                    }
                    'tm-entitlement': {
                        table: 'sys_transform_map'
                        id: '98bf09acf66449478eb75a7b3b95d966'
                    }
                    'tm-entitlement-validate': {
                        table: 'sys_transform_script'
                        id: 'b90a8c937045463c844cb96d64c03e0e'
                    }
                    'tm-group': {
                        table: 'sys_transform_map'
                        id: '2fd3eb097b5c40518782cbfee9fde23e'
                    }
                    'tm-group_member': {
                        table: 'sys_transform_map'
                        id: '69c7ee7af232410d856caa4374bf1575'
                    }
                    'tm-group_member-validate': {
                        table: 'sys_transform_script'
                        id: '3dfe2652e61640319bc1d07bc9f1ece5'
                    }
                    'tm-group-after': {
                        table: 'sys_transform_script'
                        id: 'bfea2899bf6d42bab616c0d4ecf86268'
                    }
                    'tm-group-validate': {
                        table: 'sys_transform_script'
                        id: '6ae08ab5f6c84af38c527c1cb435a41b'
                    }
                    'tm-install_base_item': {
                        table: 'sys_transform_map'
                        id: 'ef932af79c774e35bbd20bf59319d2d8'
                    }
                    'tm-install_base_item-validate': {
                        table: 'sys_transform_script'
                        id: '3800c11f26af4def9693cd69423e0662'
                    }
                    'tm-installed_product': {
                        table: 'sys_transform_map'
                        id: '5e00fde1c4c74e9bbd8af47aee0e0e0d'
                    }
                    'tm-installed_product-validate': {
                        table: 'sys_transform_script'
                        id: '560b28e6c8f74f34b5504fecf376ab52'
                    }
                    'tm-location': {
                        table: 'sys_transform_map'
                        id: '2820ca97aac242cb951bf4c3fe48a87d'
                    }
                    'tm-location-after': {
                        table: 'sys_transform_script'
                        id: 'da855797ad504d778b643ffd9087811d'
                    }
                    'tm-location-validate': {
                        table: 'sys_transform_script'
                        id: 'a68e2d7d79fa4fc2a7d8d315a6fa88d3'
                    }
                    'tm-product_model': {
                        table: 'sys_transform_map'
                        id: 'ec7cc1ad579540b78e93cdb60161e65d'
                    }
                    'tm-product_model-validate': {
                        table: 'sys_transform_script'
                        id: '20f615ba4ae24374a5d88512a63e1a2f'
                    }
                    'tm-sold_product': {
                        table: 'sys_transform_map'
                        id: 'd248c3500d9d4981b7320299ccf18ea2'
                    }
                    'tm-sold_product-validate': {
                        table: 'sys_transform_script'
                        id: 'bdb239d60d7e4278b4932f8b3380a113'
                    }
                    'widget-account-branding': {
                        table: 'sp_widget'
                        id: '8608760728184f218b59398864df028f'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '00ed7a52054c424197aa9bd38b96de85'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_hw_action'
                            value: 'repair_tracking'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '01fa0bb0a6004c9f84da94ca17a88aa4'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'user_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '022427a52403458eb2890d875dfc00d9'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'mobile_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '024a76d336ff452a93812e0676ec3798'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'asset_tag'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0281463cea5048c99a9f422b728316f3'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02e098b34d744b3bac5418f8f0e8f479'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '03228075722e4b33a3c365a1e29be57b'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                            value: 'ship_install'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03288da8dffa46e9ac147a5b62073064'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'manufacturer_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '037764dd4cf44570b23fc6de712a42dd'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'install_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '048a209eeeb5464b8932c451f118c087'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05a01048d50c45b4a3ce28d1c55b00e8'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'contract_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '06224f703d66406bbe094812ce4d17ea'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06ac745738d04216a891730e2f86956a'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'contract_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '086f4780f0a5430599c9cb5df25a07d3'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'sold_product_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08a05c0d016943658149ad8754772668'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'contract_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08ee19c976d74ea5944e845b47b534a6'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'contract_number'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '09166fca90c64f1ba314e901060b2960'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '093ac49e60864d5cb9bae5d9dffce79c'
                        key: {
                            list_id: {
                                id: '5966e6dae70f4211993a3d68a5e516e8'
                                key: {
                                    name: 'asmt_assessment_instance_question'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'asmt_assessment_instance'
                                }
                            }
                            element: 'string_value'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '09b514fdddc94c24891f3f3946ea2f7a'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'last_name'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '0c57edc4a66c4d039c17f7cea009bfc8'
                        key: {
                            ui_policy: {
                                id: '422fe0d0a72a466da3e067f479d8d487'
                                key: {
                                    table: 'sn_customerservice_case'
                                    short_description: 'Case closed by is mandatory when resolving'
                                }
                            }
                            field: 'x_1863667_csm_closed_by'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0d262c67ee864e949d728cd00b8066b2'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d3ff9fc7cb241e488bb0192efe05c96'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d81ea8b3b8640c7989ab2bfd873be13'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e2a8405f48141fe951de1d9447c57c9'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'warranty_expiration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e2d9f175d394931b7a7383ba638ef6e'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ed01c583da44ff5b4b9e45cd871c6f7'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'item_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ee1d90bf02a42a88a0b4aba26a4f98e'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_closed_by'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '0f62e7c3603d436285fb2a0718cf16cc'
                        key: {
                            table: 'sn_customerservice_task'
                            short_description: 'Hide Service on Case Task'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0fd476083b894730988c7b6924fba4ac'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'location'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '115458d5a14d4cfbb9bbd002e3f8b3d0'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '117ce4c084894b8dbf106e97a04da2cd'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'po_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '118ea9c96d4a4ba39ca04ea56ec75381'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11a3c2189e17402c9b2208b1d52c39a5'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'parent_account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1223a6f2579c4d00829b1f669c98d2b3'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '127a773ecf2042e9b82b346321edb279'
                        key: {
                            name: 'sys_user_group'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '12881ef2bc1a41a09a37d794096980c4'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13533b46bb59412498bbb43c1a89abf7'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '136fdbb8cfd7490d86aab62c9881ba7f'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '14b6e34f5b4a481c8fdeb6af1f675904'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'asset'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '152972e5853a4ffd96e972619afd6cb5'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '155bcc2cef8f491ba6750df697fa8c02'
                        key: {
                            name: 'customer_account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '172a8f77e6fe4bf38991654e4922333f'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'sold_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a7e435b7ce846c4b766ccd898818b2f'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1aac70ab9be9405aadd735b26add3488'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1b6843fb8aee4366864c148feffca29b'
                        key: {
                            map: 'ec7cc1ad579540b78e93cdb60161e65d'
                            target_field: 'manufacturer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c565c5c3d734c389db41a74e4ccfa98'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'total_cost'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1dd047456f6f4144b6a8dcd6067d506f'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1e7604248498450c9e0a936c244ee0c8'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1e8908cf5cde4427bd91dfdecf48d17a'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'longitude'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2107c00f2b924b7a8bc2001123e1b910'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'street'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21bc63bf75204dd39846a1d64a849619'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'install_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '222e6093f43e4683a052aa7cbe5ab4bb'
                        key: {
                            name: 'sys_user_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2321db92d6674305a5560ebc3659d151'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                            element: 'group_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '233eeb01385c4b06b9d18787d7df86e9'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'country'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '235e9d247d9242998ae6ff9264653c3e'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23824c3b63bf4c2cae696dd7ffc36bdf'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_hw_action'
                            value: 'remove_return'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23accfce5b9840b3a724ac6f4054a258'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                            element: 'item_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24aa0e44d97f4a5dafeb73f32f9027ae'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'parent_group_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '257fcd31e4b04bfeba62981527c1451f'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '263daf8aae324600957f9a2ad98f9888'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'street'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26e9c957bcd34535a750f0c743c66149'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '271759c48e114ae28e27bab65777b783'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28fc407e619640e8a03395f5cbdecc3f'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'zip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29f0d2ea2fe14646a3fea6abf2cea653'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2a4927beb69f47c28bb0b6134f2fe43c'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ad720db91544c6e8c93599113764591'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'total_units'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2afb663a29ba4d309f355873158674a7'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                            element: 'sold_product_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2c13d2e58af0480fa13f154725c86bc3'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'entitlement_name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2c76153f9fdf41ae9344e07cc4358687'
                        key: {
                            name: 'sn_customerservice_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d0724413dfa4bdb8ac19da9106c077c'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_tasks_created'
                            value: 'yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2dbc325d550241f4b5c1646de89a1324'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                            value: 'both'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2dd5e11a4f3a4ab2804d51071f051900'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2de8d84315b7461bb927ebf357db62f8'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2e188416e4a644a7b8cd5f61429efe6c'
                        key: {
                            map: '5e00fde1c4c74e9bbd8af47aee0e0e0d'
                            target_field: 'sold_product'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2e672eb725fb4c8ba908c2792916fce8'
                        key: {
                            map: '5e00fde1c4c74e9bbd8af47aee0e0e0d'
                            target_field: 'install_base_item'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2e90639a23014c378a50cb5623e34991'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'active'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2ea7f9c14d7640d2802f2b1c7fbacfb4'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'time_zone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2eb694f475124c12872a5462f28a4565'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ec07a1a30914f239d6db527856bc519'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2eeaec4058644d0387bb8e2c455b6a43'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f20e19dc6c44d4391d0beef2411f1c1'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f72bda9008148d7bd143337e5fa6a9a'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_hw_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '307941939b14458e937951c0082b94ec'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '30970ee8c22045109dc9ce28d103189f'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '30dedabe5b9c4aa0b9e877e92c2f52a0'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '30eb69b0d2b942c0b632e01128cc9d64'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '310055b6f1104b7298e04af8711d92ba'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_customer_code'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '322a951f346245ae987e17951eebf384'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'product'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32d368e812e941c4b3cf57d737907201'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '338005c0fcdc4d7598bceab59d53a189'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34201b2cfaa84575b5e1f26b60f6319a'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '345fbab950404f24b4cb393c867d6433'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'parent_account_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3543513fb9b2479db64ad9d3ae4f4482'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_classification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35f4d52da8fa49feb29679d488697686'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'street'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36b2c0ca20e74553807c65955baa4e69'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'street'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36dab29948b347c3816ddaa7516caa6e'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                            value: 'service_request'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3704feb51e864066b9e31122f8447345'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37289ee62c364ad999a6c8a5c8b0bdcc'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'street'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '37ca6feaf4bd4c04b265716c38d4e762'
                        key: {
                            list_id: {
                                id: '5966e6dae70f4211993a3d68a5e516e8'
                                key: {
                                    name: 'asmt_assessment_instance_question'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'asmt_assessment_instance'
                                }
                            }
                            element: 'value'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3803711bc8114ed4b965ad7a1bcdc633'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38ac477909814c3784af0e1f4069d2a5'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'parent_group_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38c00200dac940e4bcd03f02059c4784'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'install_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39053c60af0641e3a8184f086f31028d'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '39493d35ec9a4239958aea2a9548407a'
                        key: {
                            map: 'ec7cc1ad579540b78e93cdb60161e65d'
                            target_field: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39d194c1154b4613847bf8b97deb4455'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'longitude'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39e437551b7d491b994d2c958039f9e7'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'parent_location_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a044e55b01d45f58bb7e1db83944425'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'classification'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3a214925e40145a7a3362dd302ade676'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '3ab9e439fe6548edb0fe84104f79130c'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'state'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3b9aa13d93b2489a808d8e9fba5a8c0c'
                        key: {
                            name: 'sn_customerservice_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3bcbfb1302274c85bfccff70f14f9785'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '3bdb10cb852d4704a2673ec4beab82eb'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c3d2063cb82455eb23f44035c806bc7'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cafbb5d0bec4beab8b52a6c65b0ab15'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cb2e1d519ec490ba864812c67de5b8c'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_tasks_created'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cdcdd70f47349aca96a1acd8120eff8'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cf1cbf7840840e6ad90259e10ff5d93'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_portal_logo'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f2f7ad7057846b0a564dfa6d8f97ac2'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41a0f389fe5f463f89d29510e13a090a'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41adef5874c140f6915b1e818006a227'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '422fe0d0a72a466da3e067f479d8d487'
                        key: {
                            table: 'sn_customerservice_case'
                            short_description: 'Case closed by is mandatory when resolving'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '428cb8abc525458b858091b0676b047a'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'item_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '432522f7345c4944850defdb70fc8d52'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'install_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433b56c4d786463fad9e50364ee691c2'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44296531b2e4436f8c07653429a420c1'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'install_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4495367b2db4464eb6292fafa3e963e9'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'website'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44b346701ad240d2ae140153a5054e70'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                            element: 'user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '44bba1101c27409fa76889b14eb52697'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'model'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '46152191b46a4f26966967bbbc52fd5f'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'asset_tag'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '46838d2826f541179df5731b28d2c2a1'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '468c55b733bd43d1923d14c75649ccc9'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'website'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '468ec42ba9554bb3ae868cabb444e361'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                            element: 'sold_product_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46a44943d9b549f0b0907690e5ca0eee'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'time_zone'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '46f577cf15fb4a9cb5e4fef551205460'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '471b7bf8a2ed42b09a827d5c9e0653fe'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'ends'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48a7c6c415f9414d95a5b9bca0c2f3c6'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'location_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48b24af681f94cd789bbe58485668da3'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'longitude'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49bc24b204c44f979c08dc101c73ff26'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49c5ecd23e304c70a591ab721b48104c'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'warranty_expiration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '49edd612b4db417ca309527e8930f50c'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'country'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4b173e655c0f45b0801bd88774a7382b'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b6ad523dd7d498996a0f4ee243be502'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4bd6a8724fb24d0bb14ca82b2cf2d507'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'classification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c32e340b92d4fd99f6ada0f7f3f7a7f'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c59bc0b465f4056b89cb469a4b97a45'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                            element: 'item_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4cd23dfd8f0f4eb89851ab265f014172'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'sold_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d2c708997474e0caf4521c78ce734e7'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4db92fad31c7420db1e4f78810eea69c'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '508c5cfc57e7439f9e6414f368905000'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'starts'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50be77e2a40f492ea96f0b974affed9a'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'location_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '514d845c1f594183856eb9e9280a20a3'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5170a2f65a5744d78618a16d55c824db'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'sold_product_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52e5c28e838149e8b7614aa42b270622'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'install_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5398ae5c28b343ed81b1d6f22550f391'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'latitude'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '54d2ae7445c94bfeb715969e09847a47'
                        key: {
                            map: '2fd3eb097b5c40518782cbfee9fde23e'
                            target_field: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54df81d643f94ac983dc9dd1fecb3498'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                            value: 'general'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5546c4efeff1409e862ebeaf780b14a8'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5667d1a38fda4ea1b2ca566d043e5779'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58722380e45f495ebfc63c20e573d5e4'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'mobile_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58ad77fd80b64324815cae998cd321f5'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'total_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '58ba05558e13433ba84c687dd97ec6fc'
                        key: {
                            map: 'd248c3500d9d4981b7320299ccf18ea2'
                            target_field: 'sold_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '595a1ac1bf264d7a970d3625818370f5'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_portal_logo'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '5966e6dae70f4211993a3d68a5e516e8'
                        key: {
                            name: 'asmt_assessment_instance_question'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'asmt_assessment_instance'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5a2bc78471ad45cdabfe43bab8cff4b5'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5a803f09f0444b268b656f650b9e5b9c'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b979dfe84be49bfa28362f4bbf3f5f3'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_customer_code'
                            value: 'lva'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5bad9dbe5e6345899bbdcc527975cc13'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'city'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5c0f003538f147259d07114f21495259'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c4265ed1c364c20a99295f72bd4b409'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5cfe0d3a7473491c994b055decd6c2b2'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_tasks_created'
                            value: 'no'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d6bd92ffb944b9e879b3daae8d87137'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_customer_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d873c27e2824b0ea7fba55119fc2708'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e9bafcfc7254d06ac045e1f8917ab36'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5f4f8d693fd14e6bbe722dd4a56269f3'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5fe5707d1faf49bca76bce4242fa2815'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_banner_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ff07397d07a4d8da1811d2c52c91def'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'manufacturer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5ffb6e345c6642028a6b32e9e4222242'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62043a9e13984cef8ab584b472eddb62'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6531f12caeb64e1b966f66afc1ab1b8d'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'asset_tag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '669e27d118e24acfb817e08a2c99c948'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '676ad28e283341329fe9c33d8afb7f68'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                            value: 'supplier'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '67816c2e55d34115acefb78f8fccb40f'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '67e3e53652ee4a6c972681871f60acd6'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'first_name'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '68b318d4b232485e98f3bc3026fd6a63'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68c343a914f84899a5d978d05791e32b'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '694cbc104e294981a68396c73f959aeb'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'account_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '6a8193d1a6464eeeb34e5dc74adcb926'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'country'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b4c73bdf56c4e529ba612bdafd0f98c'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b5c9ddd19fe4cc58ec8136b791f710d'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '6c8cbab624ad4b299042c56f7c93baaa'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'sold_product'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6f58fbc5958a436d87b5e93cac5c974b'
                        key: {
                            name: 'sys_user_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f59ad36545d40ae96a7a9186b157daa'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7087540760414274aef716f34cc42021'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '70d869ece3ad438eb1d402bc074a35ab'
                        key: {
                            map: 'ec7cc1ad579540b78e93cdb60161e65d'
                            target_field: 'model_number'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '711044d49858470cb92cdfcedd646b46'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'warranty_expiration'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '714a6c1c46bd4efda1ae731187c82a6d'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'zip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71739b93511a4aa58281e155a67f1764'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_tasks_created'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '725beca9c6e64b26ae5bb7a169d4c973'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74fc43223c7443dc8eca9a97067c2b2d'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75becfeacbc545b994d6c7634835eaea'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76ff493f672b4d6bbbb7b04e07f35503'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77fd5d1f65c94ceea6c9c78b1b70078f'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'entitlement_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78189276d0a34bc4bef7a76cfc1b24bd'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78eab7a8a2904899aa72a51ebf6db893'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '795cb3507fa845cf8ddc294267eff82b'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a6cba873f85426fa8b850832bf54f51'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ac855d1db0043e5b9cc728489a6fef1'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'latitude'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '7b54958e5bcc4258aaca6dc4e1969d7b'
                        key: {
                            map: 'd248c3500d9d4981b7320299ccf18ea2'
                            target_field: 'contract'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7d0823a6bd4e4bf18c7a6c01989e41d3'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '7e7f45e2a56041c7805d4bd2114baf25'
                        key: {
                            map: 'd248c3500d9d4981b7320299ccf18ea2'
                            target_field: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f1241b9029f4d12b8642ebc59c03602'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f2935da1d134274b52f7330bf4dfb02'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '7f3cf5603eb54672957877676beaa97e'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'account_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '828f3bd907f14b3b9737f8a99c62c8ce'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '83f06f467b094d23992fae05bf408371'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'city'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '857b470203b949f4a7a94a211b1cc839'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '85ae3b1cf7bf4ddaa375ecc915e5b30e'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_customer_code'
                            value: 'geo'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '85fdc2f368de4328b1e2a9d4d3c0e776'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '866782b0751b4b249551a085659fd915'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '882dc63bfa9f4af1a814c4d125e0f051'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'asset_tag'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8941bfa0461c41d5a9dc35616b537634'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8958a1a0a77a4694b33bcdc463dba574'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '89a668812f10493292080739aaeb33d1'
                        key: {
                            map: '2fd3eb097b5c40518782cbfee9fde23e'
                            target_field: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89df062586c4416384b9adc23cba05f0'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8aa309be0f7046cc8c07039efe63e82c'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b451950a2e54a948363cdcd5f2fed70'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                            value: 'repair'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8bef49e4459e4fac83a949ae43b3c372'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_hw_action'
                            value: 'ship_install'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cef23cf4cb2486492021c384d4bade3'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'parent_location_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e5ed6e4da4648a3a18be6727d3498d2'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'zip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fcb801d1d7f4870bddd884ab6517ef6'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'time_zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '90037a411c494c13971c327af34f4e8c'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'street'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '904ff14c6cc54a37b2f8f587a528c502'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '910671aeef044b2297694f8ea81c680c'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'zip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '914016c56d6b4749b36635d74c69cd62'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '9220664a1d8c413e95ae9e7aa2802c97'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'contact'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '936c7694b5fd4069a2a36c61cdf2dc6b'
                        key: {
                            map: 'd248c3500d9d4981b7320299ccf18ea2'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '93da3845cb4442a387310af5ec75c73f'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'number'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '95c327a0cdf544b1acfe20996566926d'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96afa6fb903e42f3a7d3624917eebfd3'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'owner_user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '981cbf07115842fcbe070c32aa7e8cb2'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'sold_product_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98a1dc520c5440529ee192c6247c3a31'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'entitlement_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '9971d22e7f0648bc9eaf7fd2670b4732'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'short_description'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '9a0a15fb59c34196bf470ca76a15b732'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'zip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a987cea3e8c4cfd9800e42e20ab2b2a'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b0e1b06915d488cbba6229bf9a445d5'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9bac97260c41456986befebef1be7291'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '9bb93faab5ba4436a3097e9f7d68491b'
                        key: {
                            map: '574a68fc07a5486598c60f480d7f584d'
                            target_field: 'install_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9dd7a9ed6a034dd483ec4dcaf1ec5005'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9e69f62e88104448942279e22c76cdc0'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_customer_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f6a05aed9dd40d889a47b953f5da456'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f9f6936541a454399de8f5f8dbb1128'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a14f3eb551e2407a90cb8e495eb7942a'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a25b5bc34d0342d7adec826b031cdbdf'
                        key: {
                            name: 'sn_customerservice_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a314b50b684b449daa81f24afcb8047d'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a49b04ed771e400586531db16a08247f'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a55531d146cb4c19ba448a54aa59ba50'
                        key: {
                            name: 'x_1863667_csm_stg_group_member'
                            element: 'group_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'a58bf72ba247463b9c4afe755bbde0ce'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'x_1863667_csm_classification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8c2eb4387d4496eb61101aadd27e427'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'a963e47ea5f94002ad58a972473e06ab'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'zip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a97a005c37394b62a4a0587accdd4195'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'aa2740286d0144be861374f465e8ce82'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_hw_action'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa85c8270f3245a7b4f929b45c48e69d'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_request_type'
                            value: 'remove_return'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa8de27463b2432ebf1a022de9b96acf'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'sold_product_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab2d540cb104400180fcad9c2550a066'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                            value: 'change_request'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ab69c8c00bc5408bacf3059589f70f2a'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'title'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ac0b9f4040c34913987bac1de6810e33'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac38b9f7ee5b454dac406d7eab405911'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad733fc69a94441c85c67857dc0e4688'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'install_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ade941196bec411883669b019f740b37'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'phone'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'aeb3a3aea62a452da54e6a763c825138'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'correlation_id'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b201290b4cb44ba8a659d97102d0397b'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3154bb103994458b73009899e7997a0'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b4a08b3bbe0c4b5cb31318c7824a969c'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b50cec6356594c14a90e7d67ae41af86'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_customer_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b59de3747a2443cfa611bf9d7a978621'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b6500862cf854bfda759da14fc2a6d35'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'manager_user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6a6f06d44d04a28ab578699f35571f9'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'install_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b733f0a49e324c09888c299ccdcc55d4'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'location_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b7750a2c21494e93a0f8c3b48d69c74e'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'ends'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b81fb23149974218a85af74af24c0dba'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8c139b17c3940f982fb4eec3959b015'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'babb6867805a40e7898f14c5eafadd31'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'bc2f9e6d9ee94123af012b24c5757ced'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'company'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'bc90ae53ee2f4e89914a8cd18efd6874'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'contract'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bcf71c468c6a4d768c8b4711b7956ea5'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be60c0963a714bd6bb3c84c497471678'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_hw_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf53a46eb7a540069d60082868fc95fc'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'bf9ca110e6b940898f91431db0f667f2'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'po_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf9fd3eee22041d5b9a0dec876c6b30c'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c077461569fd44b6aed1f386cb33861a'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0c92e09eb9346469d62205e7e9af70e'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_account'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c167eed8d95b4c448461719aca4260f6'
                        key: {
                            map: 'ec7cc1ad579540b78e93cdb60161e65d'
                            target_field: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1c7eb703107411ab925dc48db8506f2'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c1ee233e84c64797bdd725953b7d5afa'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'total_cost'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c314fecd8ccc460596fa0908abd46690'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4cbdece04214bd39e2a9e811701fcca'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'starts'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c57ac5578a1b420c85a8e2e018b5b5fa'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c5825860af46426e9fa40a241f10afed'
                        key: {
                            name: 'sn_customerservice_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c597dfda4acd4960ba5a02bae2b9b20b'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5d9e1bcfff94287bffb7cf2879a2b38'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c65ef534b6534502bba0cddd4da1df54'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c70b00cc47ef4de99129d19b1db4bc34'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c78423f64a7648dcb6b43bfc16234832'
                        key: {
                            map: 'ef932af79c774e35bbd20bf59319d2d8'
                            target_field: 'asset'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c92830cf98af44caa850fcb4030db2ce'
                        key: {
                            map: '05ce3e52d153431ba9d57b5b08479178'
                            target_field: 'phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb2b99416ec24083a8e089ec82ce9365'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb30ab7a1c814c9ea8066c42e1690636'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'manager_user_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'cb4360d451f04b658946fea7b2b3fc39'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'starts'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbee48369fa94924a624ced25a9e73e4'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'cc548c926a4c432296b242f40ef46f94'
                        key: {
                            map: '69c7ee7af232410d856caa4374bf1575'
                            target_field: 'group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd376a71898b47609bfbde699f41570a'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'contract_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd69b554f77547c6bd73d0c2d5ebff8c'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'country'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf43aba43efc4531a128af869549a351'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'account_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd11233adfd64455abcfc872112f9ae85'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd13e6faf1f444c8d8f071777ce137ebf'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1d8d333e31e475e9c7e33adb2079235'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_closed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1ed3ef391fc43c38ee2180b2a35b143'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'd21eea08c89f41a5836554fa31e5692b'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2d8039102a14691b3d4c593c0c135fd'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2ecd47b8d6f47f5935bb413c7418915'
                        key: {
                            name: 'x_1863667_csm_stg_product_model'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd3625657deb34d65acccbffc7b19628a'
                        key: {
                            ui_policy: {
                                id: '0f62e7c3603d436285fb2a0718cf16cc'
                                key: {
                                    table: 'sn_customerservice_task'
                                    short_description: 'Hide Service on Case Task'
                                }
                            }
                            field: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd42748e5e3e34896871675be4ecfbe54'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'ends'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4bf8f421f074edfa1623c10514fd28f'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_banner_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd5e42b80393d4f968c84b507bbc7eca4'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'website'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd607140d338644fbb7d63e66c7e0c588'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd63dc167575240acac219a097d6e1d2c'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd69da3e918ec4bf7b58979b1c83a535c'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd7a55fc510b9443f84655e1ade6d724b'
                        key: {
                            list_id: {
                                id: '5966e6dae70f4211993a3d68a5e516e8'
                                key: {
                                    name: 'asmt_assessment_instance_question'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'asmt_assessment_instance'
                                }
                            }
                            element: 'metric'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8f07a2b35644629ae1c34d67907431d'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'da8d1795716d430d9cd512452a776763'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'dae4d98bf43a48bfa284f566083eac2a'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'total_units'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db0de6c050924fd7a69e8e6658198c31'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db49c39ac5204eceacff0442fcd3cfde'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db767c03a3f14a4ea3ec41f7e4979804'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'dec37152f99e4e9e85d2d0941e6e93ef'
                        key: {
                            map: '2820ca97aac242cb951bf4c3fe48a87d'
                            target_field: 'name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'df28b62a8c89429c92378bf2a3b00214'
                        key: {
                            map: 'd248c3500d9d4981b7320299ccf18ea2'
                            target_field: 'product'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e106897e862a43d98e939b81c592fbd7'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e146859a397b4e27acb7013af9a5ac68'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e190a0c12f394ee1801db32b573fe824'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e21b84e4176d462ea46dda7846bf6d4f'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e465e64b501b485397dbd3af749b17c8'
                        key: {
                            map: '34d61b2fb5b443aeb45c2bcb4b7ca3b6'
                            target_field: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4a4a9851b3a478d85a98116844fa0e3'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e667e88bb4b64df19c61af80ea76a978'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_hw_tasks_created'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e796830c7d78496c92871ef13db95635'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'account_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e79e3caca61f4132a4a2afc882fa28be'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e8197c15fdf24089b3c0522523bf6a65'
                        key: {
                            map: '2fd3eb097b5c40518782cbfee9fde23e'
                            target_field: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8df92164ce9404097321454dd8b428b'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea0e882453e34acba1b6a7afcf195a60'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea6591f2c24b49c19b0a9239d391835f'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea750b9d96fb4bb3812665da9e8a1047'
                        key: {
                            name: 'x_1863667_csm_stg_account'
                            element: 'owner_user_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed0a8b2c08cb41d795f32c122d87fdce'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'latitude'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed9ca5a90c7140b5b6f139a5dffe91db'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ee6781ffc82a4a3f9cdec4beddaa2635'
                        key: {
                            map: '4828a5ec86824caeade5c015a3a5a02b'
                            target_field: 'mobile_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef47faf31b4d4dd6b606d9fb07caa749'
                        key: {
                            name: 'sn_customerservice_task'
                            element: 'x_1863667_csm_task_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f0aacb730c9a475291581c62ed4da602'
                        key: {
                            name: 'customer_account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f19024da37d44f659a3aaa85721cbffe'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'location_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f224177ad6f3460181361fb2bed212a6'
                        key: {
                            map: '2fd3eb097b5c40518782cbfee9fde23e'
                            target_field: 'manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f231bb3cfe2541f8999ba7447caef4f4'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'asset_tag'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f29bac8f881b4c2a8a4cf4c85ed5617b'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'contract_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f2f97e81712549bca27cc60988f49036'
                        key: {
                            map: '2fd3eb097b5c40518782cbfee9fde23e'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f38aa9312ed140618d4025eeb81bcef0'
                        key: {
                            map: '98bf09acf66449478eb75a7b3b95d966'
                            target_field: 'active'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f3ce153be0cc46b0a7dff64e7821c2f8'
                        key: {
                            map: '69c7ee7af232410d856caa4374bf1575'
                            target_field: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f45012b2a67f47d2a7cecf231fd6dff0'
                        key: {
                            name: 'x_1863667_csm_stg_contact'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f45c8141607948a38189d875265d152d'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f49d2ff6babb4dd99556af5699943021'
                        key: {
                            name: 'customer_account'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f52d235568be40779bba8dd4befdb0dc'
                        key: {
                            name: 'x_1863667_csm_stg_location'
                            element: 'account_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f55b0e0fb96d4749aa81b7d025da85ae'
                        key: {
                            name: 'customer_account'
                            element: 'x_1863667_csm_classification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5efe3e8811b49d385827b0e89cb2a13'
                        key: {
                            name: 'x_1863667_csm_stg_contract'
                            element: 'po_number'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f66ce7d1ea414d3ca7a9dfc2473cdae6'
                        key: {
                            ui_policy: {
                                id: 'fb5f1bc4ed1042d786d2229634ca44d1'
                                key: {
                                    table: 'sn_customerservice_case'
                                    short_description: 'Asset mandatory for hardware replacement requests'
                                }
                            }
                            field: 'asset'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb05989c7dc5481991ac4cbdd9912470'
                        key: {
                            name: 'x_1863667_csm_stg_asset'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'fb5f1bc4ed1042d786d2229634ca44d1'
                        key: {
                            table: 'sn_customerservice_case'
                            short_description: 'Asset mandatory for hardware replacement requests'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbf255ac104f47f5b05ff51c5cf9c242'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'total_units'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fcd0c1e786b84e8f8f118a9672325259'
                        key: {
                            name: 'x_1863667_csm_stg_install_base_item'
                            element: 'asset_tag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd60829f72f94cd1990fe0b0021b86cc'
                        key: {
                            name: 'x_1863667_csm_stg_sold_product'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd75c9e437404fb2aeb8b668f3f515d7'
                        key: {
                            name: 'x_1863667_csm_stg_installed_product'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd90498173ee44d18b6ce20343c3e8fc'
                        key: {
                            name: 'x_1863667_csm_stg_group'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'fe8f289c6ea94634b2e673577a65ba6a'
                        key: {
                            map: 'd248c3500d9d4981b7320299ccf18ea2'
                            target_field: 'quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'feaa605f923d484485a031e11fa5358c'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff80928fb5fa49f28aac609503c65604'
                        key: {
                            name: 'x_1863667_csm_stg_entitlement'
                            element: 'asset_tag'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
