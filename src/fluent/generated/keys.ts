import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '52ec30163ac64ef9841d5d1557938193'
                    }
                    'hr-agent-menu': {
                        table: 'sys_app_application'
                        id: 'f2b5d411287d4c608b7a9134729f16a3'
                    }
                    'hr-agent-workspace': {
                        table: 'sys_ux_page_registry'
                        id: '94f81653117d4a7dbf7671ebe95b5d58'
                    }
                    'hr-agent-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: '1e0854c33dbf4bf487a63da9d982e8a4'
                    }
                    'hr-agent-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: 'c34ce4ebe6834a8f8cb6eea232b01c6a'
                    }
                    'hr-agent-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '8e411aef723b4ffa8c297c127831e500'
                    }
                    'hr-agent-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: '3d618c1888de455a8f6ecb923573637f'
                    }
                    'hr-agent-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '8e9c7c648cc54296a56160dfabace848'
                    }
                    'hr-agent-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: '62d00f9d3c0d420b90b5c58a213f6b2d'
                    }
                    'hr-agent-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: 'f637686921ba43589215033dfcd4eeed'
                    }
                    'hr-agent-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: '189f61d268a74d50bea7f1c67cc6f04c'
                    }
                    'hr-agent-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: 'f47a699d86a44504b2590f074964e554'
                    }
                    'hr-agent-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: 'f54f3006340d47d2b6cdf868bdca7461'
                    }
                    'hr-agent-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'fd844b8d563345fa85f80995d600795e'
                    }
                    'hr-agent-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: '5aa011ca671e4663a0cb4192a08cde80'
                    }
                    'hr-agent-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: '0adaf3121b41470b8a5143b06b3ab7b6'
                    }
                    'hr-agent-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: '64e69c16bf2b404aa27e25ed5644b8ac'
                    }
                    'hr-agent-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: 'af72dcfacd0d4c4aa72d9c38ec38f26a'
                    }
                    'hr-agent-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: '7023a629c6294be7ae97e09f46cbc930'
                    }
                    'hr-agent-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: 'b523253cd7ca4ec38889489a19ba2a00'
                    }
                    'hr-agent-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: 'ad3ade9dd0ee42279d94a3d7ed113595'
                    }
                    'hr-agent-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '4ec4ae5bbb5e4acc9bbcd7c9c39837d3'
                    }
                    'hr-agent-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '04b9a314b76f4a3088de949a94e4befd'
                    }
                    'hr-agent-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: 'c2cd495d7df84db2b3b8e7c088c144c3'
                    }
                    'hr-agent-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'd3779a839afb4c45b186aaabab181428'
                    }
                    'hr-case-close-tasks': {
                        table: 'sys_script'
                        id: 'f167e53dca214e0b9472c39440b10317'
                    }
                    'hr-case-confidential-read': {
                        table: 'sys_security_acl'
                        id: '08f53f5b283c4968bad559dba0d81c29'
                    }
                    'hr-case-defaults': {
                        table: 'sys_script'
                        id: 'ade09b6fdf1b4c83b3a78b304dab89f1'
                    }
                    'hr-case-resolution': {
                        table: 'sys_script'
                        id: '746dad9876044015a40268c1a09a2135'
                    }
                    'hr-case-target': {
                        table: 'sys_script'
                        id: 'ccf84e969e3f4e92a9b77ad86228e7aa'
                    }
                    'hr-cat-cases': {
                        table: 'sys_ux_list_category'
                        id: 'bba351ade8be4e688056682657879e2f'
                    }
                    'hr-cat-people': {
                        table: 'sys_ux_list_category'
                        id: 'daba68b97d02426a983da74e7695b9be'
                    }
                    'hr-cat-tasks': {
                        table: 'sys_ux_list_category'
                        id: '139f479435bf44fb8d6d38a66c48e2a7'
                    }
                    'hr-l-all': {
                        table: 'sys_ux_list'
                        id: '213599657e4549e397f3dc278bcfcf37'
                    }
                    'hr-l-all-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '187f1391bca3488bb64aa166cdb11b3a'
                    }
                    'hr-l-alltasks': {
                        table: 'sys_ux_list'
                        id: '382a79b0e8654f28bc3d94cb331dcbda'
                    }
                    'hr-l-alltasks-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'a10a93e30e9a44ef9371324db0bd0950'
                    }
                    'hr-l-breach': {
                        table: 'sys_ux_list'
                        id: 'dba8d588c04f49748fe665100a79aae1'
                    }
                    'hr-l-breach-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '979c220644bd4be59f4c008aa685fd0b'
                    }
                    'hr-l-confidential': {
                        table: 'sys_ux_list'
                        id: '2ce44b56e67f4618a6d0a7e8cb19a7cb'
                    }
                    'hr-l-confidential-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '05b07d070b274728b077cc421bf49618'
                    }
                    'hr-l-my': {
                        table: 'sys_ux_list'
                        id: '90e7aeb546c048e581b72fe23376aca8'
                    }
                    'hr-l-my-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'ed39bb99634540548e605c5aa70fced6'
                    }
                    'hr-l-mytasks': {
                        table: 'sys_ux_list'
                        id: 'c489f709e183438b95db6bd77670e719'
                    }
                    'hr-l-mytasks-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '6b7b0ff695ab425188ad69654144b8be'
                    }
                    'hr-l-profiles': {
                        table: 'sys_ux_list'
                        id: 'f318a583c6864a72b6af6aebf71cd21f'
                    }
                    'hr-l-profiles-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'bf226454c2b7469b8a91da1cb6f9c40e'
                    }
                    'hr-l-unassigned': {
                        table: 'sys_ux_list'
                        id: 'a093d1c92309478f9812bfa306b92d6b'
                    }
                    'hr-l-unassigned-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '0b61cca58d9948d297fa04da5690a2d6'
                    }
                    'hr-mod-cases': {
                        table: 'sys_app_module'
                        id: 'ec6d7e0083544adcbb41f02b93a560ab'
                    }
                    'hr-mod-profiles': {
                        table: 'sys_app_module'
                        id: '7d6f01edd33b438e9c6c3331e7391c62'
                    }
                    'hr-mod-services': {
                        table: 'sys_app_module'
                        id: '46684bfafa1e4456945a338b1e3cbf31'
                    }
                    'hr-mod-tasks': {
                        table: 'sys_app_module'
                        id: '3937830732124e48bb530f630f45ce6a'
                    }
                    'hr-mod-templates': {
                        table: 'sys_app_module'
                        id: 'd603037166044513a4a76347daefb4fb'
                    }
                    'hr-workspace-audience': {
                        table: 'sys_ux_applicability'
                        id: '1add9cda3cb940dd82ce1747f789aea4'
                    }
                    'hr-workspace-lists': {
                        table: 'sys_ux_list_menu_config'
                        id: 'cc9e4d4bd49246e7a51e26ff22d4f6f5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '89eb5314222c4bcc957cdd288e894a6f'
                    }
                    'src_server_case-rules_ts': {
                        table: 'sys_module'
                        id: '638709695fdb452ca3091819133ac7cb'
                    }
                    'svc-benefits-enrollment': {
                        table: 'x_hr_agent_ws_service'
                        id: '694cdf3836af4c42aa18abbe89acab0c'
                    }
                    'svc-employee-relations': {
                        table: 'x_hr_agent_ws_service'
                        id: '1123377f71a546dfa69110d06a879496'
                    }
                    'svc-general': {
                        table: 'x_hr_agent_ws_service'
                        id: '653ba8978540456db1e18c9531fdd4b1'
                    }
                    'svc-leave-request': {
                        table: 'x_hr_agent_ws_service'
                        id: '1d56015666254cd8b9db5d38d77b0b75'
                    }
                    'svc-onboarding': {
                        table: 'x_hr_agent_ws_service'
                        id: 'e2bf5a7504f54178bfcf706ec89e743b'
                    }
                    'svc-payroll-inquiry': {
                        table: 'x_hr_agent_ws_service'
                        id: '4c78035c7626420792d3fca20a00c355'
                    }
                    'x_hr_agent_ws_case-create': {
                        table: 'sys_security_acl'
                        id: '9824f9f9ff3e4335925a4a0ff71b4720'
                    }
                    'x_hr_agent_ws_case-delete': {
                        table: 'sys_security_acl'
                        id: 'ea01e9cd2e1c44278d8302c0030c1500'
                    }
                    'x_hr_agent_ws_case-read': {
                        table: 'sys_security_acl'
                        id: '1b4f473989154ea2b7302f3527911b7b'
                    }
                    'x_hr_agent_ws_case-write': {
                        table: 'sys_security_acl'
                        id: '97eb376d4869431cb9e2bc1d01a49413'
                    }
                    'x_hr_agent_ws_profile-create': {
                        table: 'sys_security_acl'
                        id: 'cabb71da0dc84e04b4fe750bb5bc88a7'
                    }
                    'x_hr_agent_ws_profile-delete': {
                        table: 'sys_security_acl'
                        id: '0142f12b28c74f97ae731f0d9f24343b'
                    }
                    'x_hr_agent_ws_profile-read': {
                        table: 'sys_security_acl'
                        id: 'd5f215e457ba4f71aea7971ab2720cb8'
                    }
                    'x_hr_agent_ws_profile-write': {
                        table: 'sys_security_acl'
                        id: '12538bddc3c2484aa8fd20d4b20130c9'
                    }
                    'x_hr_agent_ws_service-create': {
                        table: 'sys_security_acl'
                        id: 'bb7ffbc0ac2e4b4b8b5a184380330762'
                    }
                    'x_hr_agent_ws_service-delete': {
                        table: 'sys_security_acl'
                        id: 'eecae5041935455bbce63901c6991c4e'
                    }
                    'x_hr_agent_ws_service-read': {
                        table: 'sys_security_acl'
                        id: '3f13879f68804d03b81b89ceed1c450b'
                    }
                    'x_hr_agent_ws_service-write': {
                        table: 'sys_security_acl'
                        id: '3d2865df8cdf4f1ca15bcb48756bf4be'
                    }
                    'x_hr_agent_ws_task-create': {
                        table: 'sys_security_acl'
                        id: 'ee3d8634d87f48f7886c68046054b49c'
                    }
                    'x_hr_agent_ws_task-delete': {
                        table: 'sys_security_acl'
                        id: '0a349617304c4dcf92554885c0c513c1'
                    }
                    'x_hr_agent_ws_task-read': {
                        table: 'sys_security_acl'
                        id: '8cca5fdfd62043898ecb5c62a910a6bb'
                    }
                    'x_hr_agent_ws_task-write': {
                        table: 'sys_security_acl'
                        id: '1e0fdf1865924e099059b2b1f8e01d4b'
                    }
                    'x_hr_agent_ws_template-create': {
                        table: 'sys_security_acl'
                        id: '9420e5da991d4f7d9b32bf57924d238c'
                    }
                    'x_hr_agent_ws_template-delete': {
                        table: 'sys_security_acl'
                        id: '9c193a910ec94fa78e6dbdb8dde93c8f'
                    }
                    'x_hr_agent_ws_template-read': {
                        table: 'sys_security_acl'
                        id: 'b284c687c9d74c48a08d8d2905f52ba0'
                    }
                    'x_hr_agent_ws_template-write': {
                        table: 'sys_security_acl'
                        id: '3cadd2e4444c4b99ac368eba69bcb076'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '02dfcf46f3ce40ceb25b0e323006ba01'
                        key: {
                            name: 'x_hr_agent_ws_service'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '036906ca73f84dceb31c5056aee3abe9'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '05be290ec272483da8dd6f95319748b3'
                        key: {
                            category: 'x_hr_agent_ws_task'
                            prefix: 'HRT'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09f315648e1e4057b6bb279fb0e90424'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'location'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0ce2a35a76eb4d78bbad29cd5843f84a'
                        key: {
                            name: 'x_hr_agent_ws_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fd47d33ed9f4e4ba4e956ad9a1eee09'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '13319171a4ca499ea30a1287780be2b7'
                        key: {
                            sys_security_acl: '3d2865df8cdf4f1ca15bcb48756bf4be'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1382d2a98c5c4cb3aeedf9670218d88a'
                        key: {
                            sys_security_acl: 'eecae5041935455bbce63901c6991c4e'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14b1d2e304974e309cfe079926ab8e54'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'hire_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1577a20a2e7b4b8b97a4c477fa616c87'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ab9b71076fd4edb87828e305e79e06d'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                            value: 'approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b662b90a22f4ffebaeaa26fc204aa31'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f4c1a1ae88e4ef7af69ab1f0d937286'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2076302f25704a648587ec8ac9388007'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'hr_service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '217a35b972df432eb596c305270a2555'
                        key: {
                            name: 'x_hr_agent_ws_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21c330a6ec9948b2b8e1f717045ec60e'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'hr_service'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23ece1d1874046e480a43a4b456cc7ce'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2450d16beb964de2a711b4f8ee958289'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                            value: 'withdrawn'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '26ee8ca1de1b4df89cfa53e49f159395'
                        key: {
                            sys_security_acl: '9c193a910ec94fa78e6dbdb8dde93c8f'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '28291efb26ad4dd68ad7640538efe196'
                        key: {
                            sys_security_acl: '1b4f473989154ea2b7302f3527911b7b'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b6fb20245384ea782353b442d5adb8a'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                            value: 'followup'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cadae3958a24167b7c9305224aa5289'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e09e04e2a18489b8aba39335b8accf8'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'confidential'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '30d8e86919d24ad2b18377d36a3ebabb'
                        key: {
                            name: 'x_hr_agent_ws_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32416da3d75849a4831a671c233e314a'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3946008e5cbf4ebcb55ecebeb597a629'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a442d9b0a2a416ebe640367b7e07472'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3cddc3c76b664a82848c7b9af9e92eda'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '410e957fed044b27aaded48de5116cbb'
                        key: {
                            name: 'x_hr_agent_ws_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '41ec715ef7cc41499837c01a5a28b4e2'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                            value: 'not_applicable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '42cb37af0b6a49f1a34bfbe3cdccc350'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43f540d2a9bf41538c0e08ac9ca1e98a'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4447bd08d3a0429ca2f63631d90994b9'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_status'
                            value: 'terminated'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44cd66fcee5f4d4a942d2a8e36c7b4f4'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44e86ba2e530437b9ae18bbb51040d45'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4617610d718d44e79660a6c035b711b1'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47783707abec4773bc3074fd99d7dba1'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employee_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49fdedca26fa416c992b622c65d6b3c3'
                        key: {
                            sys_security_acl: '12538bddc3c2484aa8fd20d4b20130c9'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b701f1e29e64348b96c2cace9d2f4a7'
                        key: {
                            sys_security_acl: '1e0fdf1865924e099059b2b1f8e01d4b'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ce6e14defc04328911febafa1884696'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '529e716955de404897afef6ffbd837ac'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '53150290abac493f9fdc9021d734019b'
                        key: {
                            category: 'x_hr_agent_ws_case'
                            prefix: 'HRC'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '53f210a34e274816bfc1d311d024fcff'
                        key: {
                            logical_table_name: 'x_hr_agent_ws_profile'
                            col_name_string: 'user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '546461b35c6e43c09c6a3af825c72fe9'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_status'
                            value: 'on_leave'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '558c48492a834f549c3613d288c1733a'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '574c0a7bde0840ec9d2ce4d330e3e25e'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58bf3d36b45a46bca6c2f651b5654fa4'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '59790efa8faa49fda842d0e9d64eca3f'
                        key: {
                            sys_security_acl: '3f13879f68804d03b81b89ceed1c450b'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5bd6f38b6cc94cb08dc51566b44a2760'
                        key: {
                            sys_security_acl: '08f53f5b283c4968bad559dba0d81c29'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c7fa54996d74cfd917c04c1ec803650'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62647b251fb340c6a84a509fd492c536'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64e9e2cccae745548f8ae656ed842778'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65ca51e886584fbfa1625eab11a7f41c'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'hr_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66f7e41a09254b438e66add7757e6133'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '67964132372941f4bbcead69cd49b82f'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_type'
                            value: 'full_time'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '69c7d02fd35241869a8f08549e1aa572'
                        key: {
                            sys_security_acl: '3cadd2e4444c4b99ac368eba69bcb076'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b5763c9ce6149699217bf09e39d246d'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'employee_relations'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f19fc6079a142ef9c807fcb7f2bc84f'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72e4f9273f7a4a1c860144c2ffb66c2d'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77634ceafdae4133a6d3076b9e6bd537'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b3922bff7c24fcdad2bffdeb6e238fc'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_type'
                            value: 'part_time'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7deae9d2afd44f24ab69c47a3d8ff918'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e3fae1faf3944a087088d0ad5ecb9d6'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'offboarding'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ef2a1ea39af4a1b94c24d0df1bf75f9'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'general'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fef61dc97d94e4caaa6cc47c01d5bca'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'sla_hours'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8167b08e34bd42a09f8dc4a8260ab523'
                        key: {
                            sys_security_acl: '97eb376d4869431cb9e2bc1d01a49413'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '850a8c351959438590168849004dc172'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'hire_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86545d1a7776431d8ade804372a72938'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '878b27a726514aec8b4eee7efadea0ad'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'target_resolution'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8851671b82fd4f1681fb8eca1dcdc176'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a461b56b0bd49db86ac34f0325917f3'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                            value: 'resolved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8c47ae7feb2249fa97d1e9cbcff0ed40'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8c63beacc09e4de98caefbb6f847b547'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8ffef66d082a4e89ac18af7aa0fce4f5'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9014269974dd4bf789a5e5c7bb8b2473'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9168e3fd16ac47b28a1b3c41c86d9ae2'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'onboarding'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9522b08100c444efb92761bb2c8ceb00'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '96077f29f4034395a322a0fca247316b'
                        key: {
                            name: 'x_hr_agent_ws.agent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9660d9cf0af844d8a45b2590b9b06592'
                        key: {
                            sys_security_acl: '8cca5fdfd62043898ecb5c62a910a6bb'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96769774f7f240f69f6f30abf389a1d4'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'hr_profile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98671bbf59a54a7c94ed151fbfd52d03'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'opened_for'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9e74cb6fe85747848b33ac8a6861fe81'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'job_title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1cc675b284945fba5e7987fb83843db'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a26ab4c585f7487788f8c8ee578c3ca8'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'a42e4ff5d41e46f293e545f833e1b02d'
                        key: {
                            role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                            contains: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a597e916fbf94153a4f31766393208d3'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'job_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9e497f58db24102800e1280bd64abbc'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa34e1abb93f4900a226a06d692217e4'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab1ad8dd5b174912b596b7196eb7e312'
                        key: {
                            sys_security_acl: '9824f9f9ff3e4335925a4a0ff71b4720'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abdc996317cf48978d91fc79e7825efd'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'opened_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abf05f6cdf4c4754b2d3327b8b691cb1'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ac9ce6e434824eaf8d814c4d08b33427'
                        key: {
                            sys_security_acl: 'd5f215e457ba4f71aea7971ab2720cb8'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae48184eef854c9696a1187c86a7be7f'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                            value: 'duplicate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae628c727e0a4ba395a5ce5f773b3d90'
                        key: {
                            sys_security_acl: 'ea01e9cd2e1c44278d8302c0030c1500'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af5b9da8715a4b58888b8fd148accc4d'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_status'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                        key: {
                            name: 'x_hr_agent_ws.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4f3a56dc4f044c2bf6af1d4b8d0a022'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b6116e18a38843a4b0b6afe31be4dbb1'
                        key: {
                            name: 'x_hr_agent_ws_template'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b62e30736fbf42ca98c2779d98f134f5'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b6fdc555506e4b49805f57782cc1be20'
                        key: {
                            name: 'x_hr_agent_ws_template'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8e6332af9534624a7b8c98724c76911'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9d95c3e08e74d35a0ec529096670339'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd51271ee71b4bc1a509baa3ac5b1c6a'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employee_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'be4068d5f2524d0da0e5b4880617db7c'
                        key: {
                            name: 'x_hr_agent_ws_service'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2c903cd6bbc4d1ab5ac78361a404a9b'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'hr_profile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c466bdccf0924f099b92322ca5685fdc'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'target_resolution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c579b38b1716456ca01ec78dae1df2ae'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'leave'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c5abec5f5d4e481aa5ad809f1ab62fed'
                        key: {
                            sys_security_acl: 'bb7ffbc0ac2e4b4b8b5a184380330762'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c75449ae6e474533b0dd6af477554498'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cab89cf3ee63408e9570aa768ef0a6b8'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd832cbcac624908b7040a45751d95b0'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1d6fcacafcf465d9361aba71b7b8635'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'hr_service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3682991f48946bdbb21ae9f87d57b54'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'sla_hours'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4f9fc48f5434e01bfd1266138380731'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd66ceb688d3041159613394cfff64a13'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd750109a969a49b7b17b34fa3f5f7e67'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'employment_type'
                            value: 'contractor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd80c2a89aace47c8a92bdca4211b8080'
                        key: {
                            name: 'x_hr_agent_ws_template'
                            element: 'hr_service'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8c8aab6a09243e691c227483cacbc3d'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                            value: 'review'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd999ec5cb1b84faca6742416875f8323'
                        key: {
                            sys_security_acl: 'b284c687c9d74c48a08d8d2905f52ba0'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9aff7807aed4c8280ec9325709527bb'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'hr_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dac9c7e7585d427aab3d1cd4d92e6b1f'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                            value: 'referred'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'df5c3ca21f894488936a3d5dc2499ee3'
                        key: {
                            sys_security_acl: '0142f12b28c74f97ae731f0d9f24343b'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e060bdbafa574d6ab54e2fa2054d76c7'
                        key: {
                            sys_security_acl: 'ee3d8634d87f48f7886c68046054b49c'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e27a387cb7d04b0ea15fccb4a4a9b0a5'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e27f02bda9ec48fcb1b172091d914110'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'benefits'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5efb3b0554c484aaf5c9c452bc348c5'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'resolution_code'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e80e0a54c29947999ede9662ee7ebb8f'
                        key: {
                            sys_security_acl: '9420e5da991d4f7d9b32bf57924d238c'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e944379634a44c63a30ab1f150a6c714'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                            value: 'fulfillment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea9a9fd39b8544ce9188df5d9959942f'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eca63c687df247a69cd00c120d7113f8'
                        key: {
                            sys_security_acl: 'cabb71da0dc84e04b4fe750bb5bc88a7'
                            sys_user_role: {
                                id: '96077f29f4034395a322a0fca247316b'
                                key: {
                                    name: 'x_hr_agent_ws.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5ad06ed762044089c6d7c6a77e783c2'
                        key: {
                            name: 'x_hr_agent_ws_service'
                            element: 'category'
                            value: 'payroll'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f60a2a333c4a42038bd12ee6d5a8233f'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'confidential'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f932a4d2911e4531998a35d9608f7e30'
                        key: {
                            name: 'x_hr_agent_ws_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb0ad84ed7df470f840581ce9d5d3442'
                        key: {
                            sys_security_acl: '0a349617304c4dcf92554885c0c513c1'
                            sys_user_role: {
                                id: 'b3cffc16921c4dc09fcfa7e16f96de12'
                                key: {
                                    name: 'x_hr_agent_ws.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb7372dd7f564220ad7ca5a230ed31b5'
                        key: {
                            name: 'x_hr_agent_ws_profile'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fdfeb11f0ce94da2a1c795a78f8ea4a2'
                        key: {
                            name: 'x_hr_agent_ws_case'
                            element: 'subject_person'
                        }
                    },
                ]
            }
        }
    }
}
