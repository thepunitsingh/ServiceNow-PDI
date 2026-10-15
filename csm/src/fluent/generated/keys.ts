import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'acl-asset-account-read': {
                        table: 'sys_security_acl'
                        id: 'e328cef01c8c4df09424a1c2e1f0c76a'
                    }
                    'acl-attachment-account-read': {
                        table: 'sys_security_acl'
                        id: '900c5a66226b4401b9a8a243e084a565'
                    }
                    'acl-case-account-read': {
                        table: 'sys_security_acl'
                        id: '5f83ba0736404476b1f813105291da5b'
                    }
                    'acl-case-account-write': {
                        table: 'sys_security_acl'
                        id: '21bf5cf9435843899ba1b77c5d02872c'
                    }
                    'acl-case-worknotes-read': {
                        table: 'sys_security_acl'
                        id: 'a2a85500feb6493fb493d8d307c3979e'
                    }
                    'acl-case-worknotes-write': {
                        table: 'sys_security_acl'
                        id: 'b06215bad746404a9015a597efaca3c8'
                    }
                    'acl-contract-discount-read': {
                        table: 'sys_security_acl'
                        id: '1beaa76351ce49628ec451268fe9adb0'
                    }
                    'acl-contract-payment-read': {
                        table: 'sys_security_acl'
                        id: 'f247a2bbc13144d19333c98fead371f2'
                    }
                    'acl-contract-totalcost-read': {
                        table: 'sys_security_acl'
                        id: '72220e7c88d5402fb175d4482bc365fd'
                    }
                    'acl-email-account-read': {
                        table: 'sys_security_acl'
                        id: 'ebcd7887a2c14db9b1363d0ed1009600'
                    }
                    'acl-model-account-read': {
                        table: 'sys_security_acl'
                        id: 'e35d0d8ed0754a39832eaf89be4f3dfc'
                    }
                    'acl-task-account-read': {
                        table: 'sys_security_acl'
                        id: 'efd9dbbf84034787b46477a7320be5d8'
                    }
                    'acl-task-account-write': {
                        table: 'sys_security_acl'
                        id: '7ecd6cf94838401a85a320561f06da95'
                    }
                    'acl-task-sla-account-read': {
                        table: 'sys_security_acl'
                        id: '414a3136de66475292b0009f328e08eb'
                    }
                    'acl-task-worknotes-read': {
                        table: 'sys_security_acl'
                        id: 'e37ed776f4c145899c14b8619ab59fd7'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '1ce1e643115644b5aa4bbd355448c908'
                    }
                    'br-case-cancellation': {
                        table: 'sys_script'
                        id: 'd83970abc8c941cc8727e42272a7d964'
                    }
                    'br-case-channel': {
                        table: 'sys_script'
                        id: '32df201d8394436a92c3fd5bf1aaace2'
                    }
                    'br-case-closed-by': {
                        table: 'sys_script'
                        id: 'b655659caba04ab3adca5e7f06e1d2d3'
                    }
                    'br-case-escalation': {
                        table: 'sys_script'
                        id: '07772caba5f8471a88ff802ae0a40406'
                    }
                    'br-case-group-log': {
                        table: 'sys_script'
                        id: '5636e5e7f7be4c4fa733d3fe786894db'
                    }
                    'br-case-hw-tasks': {
                        table: 'sys_script'
                        id: '0a36e0d528564e38a625368dc38cea39'
                    }
                    'br-case-install-base': {
                        table: 'sys_script'
                        id: '292da31cf3ff4bafbecff524ee3ceb7f'
                    }
                    'br-case-on-hold-reason': {
                        table: 'sys_script'
                        id: '7be7ec9cd7b74362ace708d9704ebe52'
                    }
                    'br-case-priority-matrix': {
                        table: 'sys_script'
                        id: 'd59400f519144b3a850483d6312fc5cc'
                    }
                    'br-case-routing': {
                        table: 'sys_script'
                        id: '1633d785fcd5491da3c76dade503d269'
                    }
                    'br-task-resolve-case': {
                        table: 'sys_script'
                        id: 'c201660ce5814e98893244d95007386e'
                    }
                    'ds-account': {
                        table: 'sys_data_source'
                        id: '8f122e8d4e094f34b7c8095935512500'
                    }
                    'ds-agent': {
                        table: 'sys_data_source'
                        id: 'a8aad3cab56549c4bbe6d88a9b078693'
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
                    'ds-geo-asset': {
                        table: 'sys_data_source'
                        id: '6458b394a01f431c9016f4513b888e4f'
                    }
                    'ds-geo-install-base': {
                        table: 'sys_data_source'
                        id: '258d9856f5934500a3df2ab1713d04c6'
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
                    'ds-lva-asset': {
                        table: 'sys_data_source'
                        id: 'aef3835108b0402580ffc49d85c7e91b'
                    }
                    'ds-lva-install-base': {
                        table: 'sys_data_source'
                        id: '7bf78f93b00846498c6164bebd3e7330'
                    }
                    'ds-product_model': {
                        table: 'sys_data_source'
                        id: 'ad7f070e9e98438caeda396b0e9a95d0'
                    }
                    'ds-sold_product': {
                        table: 'sys_data_source'
                        id: '1215f1831e7c4471a2dac1c26090ee1f'
                    }
                    'ds-stockroom': {
                        table: 'sys_data_source'
                        id: 'aa493c83a6e648c48ab9b62464272fd1'
                    }
                    'evt-case-cancelled': {
                        table: 'sysevent_register'
                        id: '53c6cf088e794ca388fa5b6d30dd8027'
                    }
                    'grp-global-support': {
                        table: 'sys_user_group'
                        id: '693c17001dc9482790488331850430f9'
                    }
                    'grp-l2-geo': {
                        table: 'sys_user_group'
                        id: 'eba1c17a36a44426aa59473e95d535d9'
                    }
                    'grp-l2-geo-role': {
                        table: 'sys_group_has_role'
                        id: 'df16725b3b6946f495c4b09e095c2809'
                    }
                    'grp-l2-lva': {
                        table: 'sys_user_group'
                        id: '0aa517d67ec6443cbe30394edb86da04'
                    }
                    'grp-l2-lva-role': {
                        table: 'sys_group_has_role'
                        id: '096eb8fc9b4247faa25e07486cada2ea'
                    }
                    'grp-l31-global': {
                        table: 'sys_user_group'
                        id: 'bbad0bc062a749e7be9b5dae0e847eb5'
                    }
                    'grp-l31-global-role': {
                        table: 'sys_group_has_role'
                        id: '0281d1c623b049c59c41a60103fe930c'
                    }
                    'grp-l32-oem': {
                        table: 'sys_user_group'
                        id: '649ea6c77f6c42f3b6de5e60abc70778'
                    }
                    'grp-l32-oem-role': {
                        table: 'sys_group_has_role'
                        id: '6f222e748a7448298a0d8ba913047608'
                    }
                    'grp-l32-rd': {
                        table: 'sys_user_group'
                        id: 'aabc43e713844ba6aaa5ddb842d4aa56'
                    }
                    'grp-l32-rd-role': {
                        table: 'sys_group_has_role'
                        id: '9c5159f7192f4daea4532fc5f01d7581'
                    }
                    'grp-l32-sid': {
                        table: 'sys_user_group'
                        id: 'f7807ca2d6e1415196fc946b8a9635a2'
                    }
                    'grp-l32-sid-role': {
                        table: 'sys_group_has_role'
                        id: '17b48aff8afb43a494e762055cd7243e'
                    }
                    'grp-l32-supplier': {
                        table: 'sys_user_group'
                        id: '0ed1b22a48fc4feea4a6c47d3be5f8d2'
                    }
                    'grp-l32-supplier-role': {
                        table: 'sys_group_has_role'
                        id: '05dd16fb785c4df69f6876908481f375'
                    }
                    'iea-create-case': {
                        table: 'sysevent_in_email_action'
                        id: '3269d15eea3f4b3b920d027622a39d87'
                    }
                    'notif-case-cancelled': {
                        table: 'sysevent_email_action'
                        id: 'a1f94795474e4b0384e2423cdffafaee'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9f289914e6f242f6acdae9583e16e774'
                    }
                    'pm-1-1': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: '33741d55bc7446cb9a90008b50483393'
                    }
                    'pm-1-2': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: '48e978185295437084655192c493948c'
                    }
                    'pm-1-3': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: '170b0f17d4d04808824c6988fde1dffc'
                    }
                    'pm-2-1': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: '48bfc763466e4c689dd51b473588bed8'
                    }
                    'pm-2-2': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: 'e624e7e6bd494564997249d2b50cd104'
                    }
                    'pm-2-3': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: '954f5b1811d54f678fff68193a7ec76c'
                    }
                    'pm-3-1': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: 'f1f9bce03cbd48ce9b8a344b706ec3a7'
                    }
                    'pm-3-2': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: 'f2ae59e659f84af08f057298392d6fda'
                    }
                    'pm-3-3': {
                        table: 'x_1863667_csm_priority_matrix'
                        id: '11e2f2bae0f744fdb070c1196ba38d66'
                    }
                    'portal-csmgnd': {
                        table: 'sp_portal'
                        id: 'a6ef65a1dd934e43ad39ebb50260e435'
                    }
                    'prop-portal-default-banner': {
                        table: 'sys_properties'
                        id: '864756fca6c04cfc880183ff99718ef8'
                    }
                    'prop-portal-default-font': {
                        table: 'sys_properties'
                        id: 'e92be3863654491390d27b3529164718'
                    }
                    'prop-portal-default-logo': {
                        table: 'sys_properties'
                        id: '676c45c80f9148b392f6d832d756f8bd'
                    }
                    'prop-support-mailbox': {
                        table: 'sys_properties'
                        id: '6c660e2a96674a14b673891cec577bc7'
                    }
                    'qr-asset-account': {
                        table: 'sys_script'
                        id: '7e948ef0fa5a459db20f59c09c186c1f'
                    }
                    'qr-case-account': {
                        table: 'sys_script'
                        id: 'aecf2da80e054b7bb74137fc67deb808'
                    }
                    'qr-install-base-account': {
                        table: 'sys_script'
                        id: '5ec7bfa4c5bf44d184dc66ce97d4d211'
                    }
                    'qr-model-account': {
                        table: 'sys_script'
                        id: '4f2f57105720469999a4cbb3457ada87'
                    }
                    'qr-task-account': {
                        table: 'sys_script'
                        id: 'e708725789bc4fa9b96934f6984d5cff'
                    }
                    'rp-case-basic': {
                        table: 'sc_cat_item_producer'
                        id: '6bce09dd26034b25be72ccd1e0471e00'
                    }
                    'rp-case-install-base': {
                        table: 'sc_cat_item_producer'
                        id: 'eaacc773dd164e2cb6ebea7ba85bb8b3'
                    }
                    'rp-case-product': {
                        table: 'sc_cat_item_producer'
                        id: 'f76a4148505b44ebbf8021c2af5e017e'
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
                    'search-source-case': {
                        table: 'sp_search_source'
                        id: '76b4b55c7abf4930b4a730e63c831a8b'
                    }
                    'si-case-filters': {
                        table: 'sys_script_include'
                        id: '51a5b2c8213a46949928f964df64b2e9'
                    }
                    'si-csm-access': {
                        table: 'sys_script_include'
                        id: '5bfe1b3cc03f4ff6ab7ecd225ab657cb'
                    }
                    'sla-geo-escalation-p1-def': {
                        table: 'contract_sla'
                        id: '0683b98639414ab591e9083b5e1a3f92'
                    }
                    'sla-geo-escalation-p1-loc': {
                        table: 'contract_sla'
                        id: 'cb0fcda775744f979a16d22f05c2f4e3'
                    }
                    'sla-geo-escalation-p2-def': {
                        table: 'contract_sla'
                        id: '578cafb39f494e398c9b123cfe2c3435'
                    }
                    'sla-geo-escalation-p2-loc': {
                        table: 'contract_sla'
                        id: '6c5101ed8dee4e6dbf0a00e1daa58b73'
                    }
                    'sla-geo-escalation-p3-def': {
                        table: 'contract_sla'
                        id: '60cad2507ed34a84aa2e1b5d73c2a6d2'
                    }
                    'sla-geo-escalation-p3-loc': {
                        table: 'contract_sla'
                        id: 'c8d2b33357434e4583c382afb39a0475'
                    }
                    'sla-geo-escalation-p4-def': {
                        table: 'contract_sla'
                        id: 'acdec1f32d7c45da93987197d8d40185'
                    }
                    'sla-geo-escalation-p4-loc': {
                        table: 'contract_sla'
                        id: 'b7fa854c10264c918d178e53cfb6fc2c'
                    }
                    'sla-geo-resolution-p1': {
                        table: 'contract_sla'
                        id: '183394a09098425daee5c40d2edcc796'
                        deleted: true
                    }
                    'sla-geo-resolution-p1-def': {
                        table: 'contract_sla'
                        id: '699a743256a1431d9d6e20bf8b2f1e25'
                    }
                    'sla-geo-resolution-p1-loc': {
                        table: 'contract_sla'
                        id: 'fce3d26275bc40c7a94d738e0f78eb9b'
                    }
                    'sla-geo-resolution-p2': {
                        table: 'contract_sla'
                        id: '88dea1b3ffb14209881c8ee0918e510a'
                        deleted: true
                    }
                    'sla-geo-resolution-p2-def': {
                        table: 'contract_sla'
                        id: '0899aa3f4e174aba9d4a9b1399f65179'
                    }
                    'sla-geo-resolution-p2-loc': {
                        table: 'contract_sla'
                        id: '400cb1749b3a43fa905679d1f4a89f0a'
                    }
                    'sla-geo-resolution-p3': {
                        table: 'contract_sla'
                        id: 'f39dbaeb5e1a4e02bc61debf47c92407'
                        deleted: true
                    }
                    'sla-geo-resolution-p3-def': {
                        table: 'contract_sla'
                        id: 'dfd9dd3f73b04dfa920bd7aeb8db2bae'
                    }
                    'sla-geo-resolution-p3-loc': {
                        table: 'contract_sla'
                        id: '5fb864902dca475793fac488adc31346'
                    }
                    'sla-geo-resolution-p4': {
                        table: 'contract_sla'
                        id: '717538b8c00a43a197e9b448f0d131bf'
                        deleted: true
                    }
                    'sla-geo-resolution-p4-def': {
                        table: 'contract_sla'
                        id: 'e81e4a74f16d41708572735fe3b39f04'
                    }
                    'sla-geo-resolution-p4-loc': {
                        table: 'contract_sla'
                        id: 'd83d2e0e5806462088fccbd766be2925'
                    }
                    'sla-geo-response-p1': {
                        table: 'contract_sla'
                        id: 'd872725614e94f6589e31880ebca6da3'
                        deleted: true
                    }
                    'sla-geo-response-p1-def': {
                        table: 'contract_sla'
                        id: 'fedd93e687c24e9cb494173a67e91a06'
                    }
                    'sla-geo-response-p1-loc': {
                        table: 'contract_sla'
                        id: '0e5e190dbfc14829bfc3b25749faef4f'
                    }
                    'sla-geo-response-p2': {
                        table: 'contract_sla'
                        id: 'c3a18dfb18054cce83847d6eee5c5d48'
                        deleted: true
                    }
                    'sla-geo-response-p2-def': {
                        table: 'contract_sla'
                        id: '548d9e039e8c41f585a2d279ec69ef00'
                    }
                    'sla-geo-response-p2-loc': {
                        table: 'contract_sla'
                        id: '7ef1a235c119498093edca574a7115bf'
                    }
                    'sla-geo-response-p3': {
                        table: 'contract_sla'
                        id: 'f493325e406244d5a60223fed2222216'
                        deleted: true
                    }
                    'sla-geo-response-p3-def': {
                        table: 'contract_sla'
                        id: '69c319c24c7548b393aba9a5257738c5'
                    }
                    'sla-geo-response-p3-loc': {
                        table: 'contract_sla'
                        id: '8915db98a399438abb86b94117036b8b'
                    }
                    'sla-geo-response-p4': {
                        table: 'contract_sla'
                        id: '192c15a609514ed18403e7e6ef21ba2a'
                        deleted: true
                    }
                    'sla-geo-response-p4-def': {
                        table: 'contract_sla'
                        id: '213b95fb1e31441e9870f72e00ff745b'
                    }
                    'sla-geo-response-p4-loc': {
                        table: 'contract_sla'
                        id: '4826902b3e8e40a6b7a0b041a2c198c7'
                    }
                    'sla-geo-workaround-p1-def': {
                        table: 'contract_sla'
                        id: 'b701a7a0c9b048d681114528ab9dd96f'
                    }
                    'sla-geo-workaround-p1-loc': {
                        table: 'contract_sla'
                        id: '7b7812ef0b55429e9e0c2ec2c5c15483'
                    }
                    'sla-geo-workaround-p2-def': {
                        table: 'contract_sla'
                        id: 'af3596867cb74c31833ec3a9a4a92c74'
                    }
                    'sla-geo-workaround-p2-loc': {
                        table: 'contract_sla'
                        id: '05ed53afa6814f75801c1af9cc97e35e'
                    }
                    'sla-geo-workaround-p3-def': {
                        table: 'contract_sla'
                        id: '2b04a1ca8d2a47d3b53ee96ea595d9ff'
                    }
                    'sla-geo-workaround-p3-loc': {
                        table: 'contract_sla'
                        id: '1361e9703be0425fa0f22edb24137849'
                    }
                    'sla-geo-workaround-p4-def': {
                        table: 'contract_sla'
                        id: '54a69bf8ff564cc198122583b4fb95a4'
                    }
                    'sla-geo-workaround-p4-loc': {
                        table: 'contract_sla'
                        id: '0b946970fd57437e888b9a6c09ee9385'
                    }
                    'sla-lva-escalation-p1': {
                        table: 'contract_sla'
                        id: '99f8e00c567d40fbbcc20fdcde74ee0f'
                    }
                    'sla-lva-escalation-p2': {
                        table: 'contract_sla'
                        id: 'fc7a96943ba34eb5b752f59dd4ccbd86'
                    }
                    'sla-lva-escalation-p3': {
                        table: 'contract_sla'
                        id: '24ae54fb7c264f19bdf2f4262f04c229'
                    }
                    'sla-lva-escalation-p4': {
                        table: 'contract_sla'
                        id: 'd0d78093fc624e43a0b0a5e1bfba9f0f'
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
                    'sla-lva-workaround-p1': {
                        table: 'contract_sla'
                        id: '9ca3532d81ea4f718a9202316399e55d'
                    }
                    'sla-lva-workaround-p2': {
                        table: 'contract_sla'
                        id: '5aa0828fd433470996d56821bbeef195'
                    }
                    'sla-lva-workaround-p3': {
                        table: 'contract_sla'
                        id: 'eacdf0ea8f574e9db3401523ea8e64be'
                    }
                    'sla-lva-workaround-p4': {
                        table: 'contract_sla'
                        id: '293dcf872af34285ada55cf079f6479f'
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
                    src_server_onboarding_ts: {
                        table: 'sys_module'
                        id: '2ceea8dff25e44c1b7c786b0daeefb6b'
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
                    'tm-agent': {
                        table: 'sys_transform_map'
                        id: '07f37e5a498c4a5da9e16aeffab08687'
                    }
                    'tm-agent-groups': {
                        table: 'sys_transform_script'
                        id: '439848643ba749baab70e803ad12f214'
                    }
                    'tm-agent-validate': {
                        table: 'sys_transform_script'
                        id: 'da53bfbe7f5a402ba4e28cbc3e20a3fe'
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
                    'tm-contact-default-password': {
                        table: 'sys_transform_script'
                        id: '8716c858c7cf4916a1370c24585176e7'
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
                    'tm-stockroom': {
                        table: 'sys_transform_map'
                        id: '6279be55157a4741b983a8ece289646e'
                    }
                    'tm-stockroom-validate': {
                        table: 'sys_transform_script'
                        id: '3d1112d366c540e9b4586b8b62b069c7'
                    }
                    'ua-onboard-project': {
                        table: 'sys_ui_action'
                        id: '1113f74344c946e492df4cb021788ebe'
                    }
                    'widget-account-branding': {
                        table: 'sp_widget'
                        id: '8608760728184f218b59398864df028f'
                    }
                    'widget-case-lists': {
                        table: 'sp_widget'
                        id: 'a89f0628986143809df08f3a154d0c8e'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '00033b59fe8b4865aa3d19c00441507d'
                        key: {
                            sys_security_acl: 'e37ed776f4c145899c14b8619ab59fd7'
                            sys_user_role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '000f43a1d4284d76bba75852da7d6e7b'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_sla_schedule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '0033caf641ff461a9dfc71df96b93ede'
                        key: {
                            name: 'x_1863667_csm.account_scoped'
                        }
                    },
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
                        table: 'sys_transform_entry'
                        id: '04130f8e25dc48da9cf436e490d4d7b6'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'active'
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
                        table: 'sys_security_acl_role'
                        id: '07aaa4c9bef943c0a212308689fc2419'
                        key: {
                            sys_security_acl: '1beaa76351ce49628ec451268fe9adb0'
                            sys_user_role: {
                                id: 'e813f5e7b5124caa98b3eb88d30c934a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
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
                        table: 'ua_table_licensing_config'
                        id: '0897ae5a94cf4c9f8b3a259bd912956f'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
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
                        table: 'sys_user_role_contains'
                        id: '0b7e5e6d4729444a95e468165d6b665d'
                        key: {
                            role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
                            contains: {
                                id: '0033caf641ff461a9dfc71df96b93ede'
                                key: {
                                    name: 'x_1863667_csm.account_scoped'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bdce4967b5344a0b1df824e3a1b1936'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_on_hold_reason'
                            language: 'en'
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
                        table: 'sys_db_object'
                        id: '0cd5399faefd4aeab4881351e937dfd9'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
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
                        table: 'sys_documentation'
                        id: '0daa07e0d2514e5ab5673781a78bdde9'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'impact'
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
                        table: 'sys_ui_element'
                        id: '0fb171df74914c85a074208b06344966'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_channel'
                            position: '100'
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
                        table: 'sc_cat_item_catalog'
                        id: '102dc4190eab4817beddd121897c7e78'
                        key: {
                            sc_cat_item: 'eaacc773dd164e2cb6ebea7ba85bb8b3'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '114257ff6c694d0184f6b84fbed501f1'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'impact'
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
                        table: 'sys_documentation'
                        id: '1501eaee9ff94e0f86c08fa2036f7d58'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'email'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: '1741487803cb42ab8aad8ee03dc585fe'
                        key: {
                            sys_security_acl: '72220e7c88d5402fb175d4482bc365fd'
                            sys_user_role: {
                                id: 'e813f5e7b5124caa98b3eb88d30c934a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '17754398dbdd4dd5ac6ffda379decdb6'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '186983b847294ae19632d24629dcf248'
                        key: {
                            sys_security_acl: '1beaa76351ce49628ec451268fe9adb0'
                            sys_user_role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '19799ce4cd694c0585d5a48c1be7f6ca'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'first_name'
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
                        table: 'sys_user_role_contains'
                        id: '1e25e282f7c248d38e84bf373bbe70ef'
                        key: {
                            role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
                            contains: {
                                id: 'facde90da6bd4ab28aa166184fbbe568'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e58ca58bf82444fbcdfe2ce2d4aca2a'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_location_type'
                            value: 'depot'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '2115b8740b9e493692653da7eb9da5fa'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'account'
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
                        table: 'sys_user_role'
                        id: '22068212a8834066b8d2010114e510cd'
                        key: {
                            name: 'x_1863667_csm.case_viewer'
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
                        table: 'sys_db_object'
                        id: '2246174a9f5340ed9903d038bb177a48'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
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
                        id: '23dffc8f2be4499ba0778bb917be8f85'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '246986dc05bb477eb657744c927c7af4'
                        key: {
                            sys_security_acl: 'e37ed776f4c145899c14b8619ab59fd7'
                            sys_user_role: {
                                id: 'deeb20e79e2a4956aafbb5e9b0b60fb1'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: '25d318f46cfd4d39a538563725087098'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '25fc92c096a241e2b58d0f7dbbfc4919'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'phone'
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
                        table: 'sys_security_acl_role'
                        id: '264723e420bd485cb97b65de33a6ea32'
                        key: {
                            sys_security_acl: '1beaa76351ce49628ec451268fe9adb0'
                            sys_user_role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: '2723af56c9aa4568b29ed480f48fcc83'
                        key: {
                            sys_security_acl: 'b06215bad746404a9015a597efaca3c8'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2743567678514135bacf6c778d78a6a2'
                        key: {
                            sys_security_acl: 'e37ed776f4c145899c14b8619ab59fd7'
                            sys_user_role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27923dd6ddf2470b9793a201e09bffc6'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
                            value: 'internal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27f01b3f30c1404d878aa634851fd898'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'stockroom_type'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '28e3d449e59d428ab650c0760a3e2403'
                        key: {
                            role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
                            contains: {
                                id: '884db86d4b4747cc96bed6fe63d997db'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'sys_dictionary'
                        id: '298576a50aa7481db47b91ce77839d5f'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'contract'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '298b0a3a6eaa45a4b6ca48c03bf82e22'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_location_type'
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
                        id: '2ad34a50b080492a826b26e7475a9271'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '2b3928886fc744afb19f51d58a2f7119'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_supplier_reference'
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
                        table: 'ua_table_licensing_config'
                        id: '2c2492bfc238425fbdee4fd211ae2859'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
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
                        table: 'sys_documentation'
                        id: '2cc22ee763e542e38b46470e2302341f'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_priority_override'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '2e559c2859fb43f6b237c0e86641c069'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'direction'
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
                        table: 'sys_documentation'
                        id: '2ec674bfd3664058bb1901862117fb1e'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'to_group'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: '2f1068c5cb764176b7161f6ac991056b'
                        key: {
                            sys_security_acl: 'a2a85500feb6493fb493d8d307c3979e'
                            sys_user_role: {
                                id: 'e813f5e7b5124caa98b3eb88d30c934a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: '312413b589ae40ec8c3f581747d70367'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'contract'
                            language: 'en'
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
                        table: 'sys_user_role_contains'
                        id: '34660f26999342f29240fbb03cdf9cc8'
                        key: {
                            role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
                            contains: {
                                id: 'd72f90e1581640cbaca01ee6afcd459a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3511e56aa068418189a5f2dd0457a3c6'
                        key: {
                            sys_security_acl: 'a2a85500feb6493fb493d8d307c3979e'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: '35f16322d4474a4e9973325b11ca39cf'
                        key: {
                            sys_security_acl: 'a2a85500feb6493fb493d8d307c3979e'
                            sys_user_role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
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
                        table: 'sys_choice_set'
                        id: '3636edf6086c4d44bda89b41989bea55'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
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
                        table: 'sys_user_role'
                        id: '3882a594b35d44aea662319e05b0b501'
                        key: {
                            name: 'x_1863667_csm.l2_agent'
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
                        table: 'sys_ui_policy'
                        id: '39367855599f48379c90bdf18bb85d54'
                        key: {
                            table: 'sn_customerservice_case'
                            short_description: 'Cancellation reason mandatory when cancelling'
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
                        table: 'sys_choice'
                        id: '39dc376bc2074c2ca92f7d5862496fb3'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_tier'
                            value: 'l3_2'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_documentation'
                        id: '39ed8424c98841ce85a326c1502ca172'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'title'
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
                        table: 'sys_user_role_contains'
                        id: '3afa0c24fb36474e8a1f1e3d6d4094f8'
                        key: {
                            role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
                            contains: {
                                id: '7a12ae90ef884910a0feff49ee9f7632'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b25c98417dd44b48ac46b2856d3ce5a'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_cancel_reason'
                            language: 'en'
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
                        id: '3c23a4631584401aa1acff5569217c30'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'reason'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '3cc5281b75a548188a0912af8160aa9d'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'reference_number'
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
                        table: 'sc_cat_item_catalog'
                        id: '3d030da5efc9408db45606e4a73a2178'
                        key: {
                            sc_cat_item: 'f76a4148505b44ebbf8021c2af5e017e'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d406af7e12346ce9869cc0a91c371f1'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'location_code'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d93e463579e43d5aa804443be19b566'
                        key: {
                            sys_security_acl: 'b06215bad746404a9015a597efaca3c8'
                            sys_user_role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: '3f74e6ac57874cc6a82f2d9998114c3b'
                        key: {
                            sys_security_acl: 'f247a2bbc13144d19333c98fead371f2'
                            sys_user_role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4068676765db451f88bda4afac6bece1'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'direction'
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
                        table: 'sys_dictionary'
                        id: '42536556e22e42649137f7168312b70c'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'priority'
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
                        table: 'sys_choice_set'
                        id: '42dc5b4266054cb9ae357dd18c0307dd'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_tier'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4310f8aeb55a41af8763b8942dcaa456'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'account'
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
                        table: 'sys_dictionary'
                        id: '44086e29e163477db032363deae37bf3'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'performed_by'
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
                        table: 'sys_ui_element'
                        id: '47c5506f49ea49e88495806d1f6acaac'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_escalation_reason'
                            position: '105'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '4809482748c1404087c75f6479e8e50e'
                        key: {
                            role: {
                                id: 'd3d0ad3db4da46d8961b56c12cac2f62'
                                key: {
                                    name: 'x_1863667_csm.customer_contact'
                                }
                            }
                            contains: {
                                id: '0033caf641ff461a9dfc71df96b93ede'
                                key: {
                                    name: 'x_1863667_csm.account_scoped'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '4838f9c52dc2490a8ac287a3ba49dc82'
                        key: {
                            map: '6279be55157a4741b983a8ece289646e'
                            target_field: 'type'
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
                        table: 'sys_db_object'
                        id: '48f6f9004c034e52beb029b4abf47dd1'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '499f821c9cb94388b83f02f5eab119fd'
                        key: {
                            sys_security_acl: '72220e7c88d5402fb175d4482bc365fd'
                            sys_user_role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '4a1a8a80e43a410b9259bf3c21c79d7a'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_on_hold_reason'
                            position: '103'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4aab92a6355d4d29bbcf475634b8e686'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_tier'
                            value: 'l2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4acde6d0d745440d85c581b2ab666fd5'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'name'
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
                        table: 'item_option_new'
                        id: '4fd28b9af4f1462c84cb904d46229c7e'
                        key: {
                            cat_item: '6bce09dd26034b25be72ccd1e0471e00'
                            variable_set: 'NULL'
                            name: 'description'
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
                        id: '521e81b7849442c6b0435c0779143e38'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'active'
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
                        table: 'item_option_new'
                        id: '531b3e88a4b24644951ea5d08aa74ce2'
                        key: {
                            cat_item: 'f76a4148505b44ebbf8021c2af5e017e'
                            variable_set: 'NULL'
                            name: 'location'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '532088eb6d6a4994bda8da5db583f615'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_on_hold_reason'
                            value: 'awaiting_supplier'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '535d6e91caec4449990706e655576222'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'last_name'
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
                        table: 'sys_dictionary'
                        id: '564d4c27d9414377afca29bfd2bf630e'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'from_group'
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
                        table: 'sys_documentation'
                        id: '57f9c6b3c94c4c24bb4f483511a635a1'
                        key: {
                            name: 'cmn_location'
                            element: 'NULL'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '5a43ca7296de4d06944332a3d3c6a54e'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '5ab9ffd8c2b448a09710634d8767ff62'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
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
                        id: '5c31377c7cef414fbb831f9039e85e47'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'reference_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c326f64a3e44441a87ccfa78ce7e7dc'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_priority_override'
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
                        table: 'item_option_new'
                        id: '5eaa52767b8444d4b36f0e463f7f40c4'
                        key: {
                            cat_item: '6bce09dd26034b25be72ccd1e0471e00'
                            variable_set: 'NULL'
                            name: 'short_description'
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
                        table: 'sys_user_role_contains'
                        id: '5f781d89493c49a1b91e516d0f62eda6'
                        key: {
                            role: {
                                id: '22068212a8834066b8d2010114e510cd'
                                key: {
                                    name: 'x_1863667_csm.case_viewer'
                                }
                            }
                            contains: {
                                id: 'c69b53412be6420ea2e0998731a759a8'
                                key: {
                                    name: 'sn_customerservice.case_viewer'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '62d2b5d288e742298f024f53d120eab2'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_priority_override'
                            position: '102'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '633464663baa42cc9e836a3323f6a700'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '634cc1d3fbcd4b8a8360fd684489e593'
                        key: {
                            role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
                            contains: {
                                id: '0033caf641ff461a9dfc71df96b93ede'
                                key: {
                                    name: 'x_1863667_csm.account_scoped'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '64a16f40852f495f83d3cb14c6565d19'
                        key: {
                            name: 'x_1863667_csm.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65288dc78a4149a8a3afcf00cc81507c'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'stockroom_type'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: '65960fbd8d654eecb4a06326538f4f98'
                        key: {
                            sys_security_acl: '72220e7c88d5402fb175d4482bc365fd'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '659ed9626b644fd09416fc1e602ee87b'
                        key: {
                            sys_security_acl: '1beaa76351ce49628ec451268fe9adb0'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '65df7c57b0ca4e9c80e70db49bc2f1f3'
                        key: {
                            sys_security_acl: 'e37ed776f4c145899c14b8619ab59fd7'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
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
                        table: 'sc_cat_item_catalog'
                        id: '67016517e4204653807839927aa17413'
                        key: {
                            sc_cat_item: '6bce09dd26034b25be72ccd1e0471e00'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
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
                        table: 'sys_security_acl_role'
                        id: '680e5cf00d344e339e02aba1a281cf5c'
                        key: {
                            sys_security_acl: 'a2a85500feb6493fb493d8d307c3979e'
                            sys_user_role: {
                                id: '9f21882b1ee9465fb1da28d86090da18'
                                key: {
                                    name: 'x_1863667_csm.l3_2_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6891d6e90c604f71b11613e2bd532cda'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'l2_group'
                            language: 'en'
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
                        table: 'sys_ui_element'
                        id: '6a10d01aee6d4ac18543300107eb5df8'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_supplier_reference'
                            position: '106'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a119da686af40b1872e81659e69947a'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'NULL'
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
                        id: '6b5c9623980749ee9211dd0b8208ba4f'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'to_group'
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
                        table: 'sys_user_role_contains'
                        id: '6d196727de414c0da92cdcbf354e4f28'
                        key: {
                            role: {
                                id: '22068212a8834066b8d2010114e510cd'
                                key: {
                                    name: 'x_1863667_csm.case_viewer'
                                }
                            }
                            contains: {
                                id: '0033caf641ff461a9dfc71df96b93ede'
                                key: {
                                    name: 'x_1863667_csm.account_scoped'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6db0fee8430e4191bbf68d1ef3798864'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'group_names'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e54ca706f63433bb6d8dbcb9782d272'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'NULL'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '6fd1fa2c1791416093bfd4cab129715e'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'account_code'
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
                        table: 'sys_choice'
                        id: '7127a3456fa34f89b7cd255d8a03de66'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
                            value: 'phone'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '734eee3ac70c400a88ce85f9e292f898'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_escalation_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73ac7cf0e5db415ca0c7d3a5f45dbcaa'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '73df16ca52584d0fa98c09392a17b428'
                        key: {
                            cat_item: 'f76a4148505b44ebbf8021c2af5e017e'
                            variable_set: 'NULL'
                            name: 'product'
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
                        id: '756bb2368b014b9e97c5cf8e98ebaee5'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'NULL'
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
                        table: 'item_option_new'
                        id: '7747b747ae974f91ac7f1da9e8961fdb'
                        key: {
                            cat_item: 'eaacc773dd164e2cb6ebea7ba85bb8b3'
                            variable_set: 'NULL'
                            name: 'description'
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
                        table: 'sys_transform_entry'
                        id: '798f3aae1f9a498484c651ae85d2a58a'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a0df25d45804a05a376e69a715e86a4'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_on_hold_reason'
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
                        table: 'sys_documentation'
                        id: '7c073e5d9ae945b2b2a052e1fe982838'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_tier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7c6aded951d44c13b79e8233f0a51170'
                        key: {
                            sys_security_acl: '1beaa76351ce49628ec451268fe9adb0'
                            sys_user_role: {
                                id: 'deeb20e79e2a4956aafbb5e9b0b60fb1'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'm2m_sp_portal_search_source'
                        id: '7e6b8eb1041c42d6992b476a4955d8f2'
                        key: {
                            sp_portal: 'a6ef65a1dd934e43ad39ebb50260e435'
                            sp_search_source: 'c6170ae86721220023c82e08f585efe6'
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
                        id: '7f1427a8d76c44549d2744f88d5d5890'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_sla_schedule'
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
                        id: '82b3aa1412584b278caa4c1fb18a31c2'
                        key: {
                            map: '6279be55157a4741b983a8ece289646e'
                            target_field: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8320e7da3e494007b1144ba3f489fa75'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
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
                        table: 'sys_dictionary'
                        id: '85bc9a2a1e7d4f4291f3d3a7b398ab05'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'location'
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
                        table: 'item_option_new'
                        id: '8e594ed298ab42be94511996dff9f0b2'
                        key: {
                            cat_item: '6bce09dd26034b25be72ccd1e0471e00'
                            variable_set: 'NULL'
                            name: 'location'
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
                        table: 'item_option_new'
                        id: '8e5f455f0bfe4e97a432dfa514fa4585'
                        key: {
                            cat_item: 'f76a4148505b44ebbf8021c2af5e017e'
                            variable_set: 'NULL'
                            name: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8efb00b2b66e45fea1f69c9c3e04be55'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_tier'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f7828ca6eab49ffb84fab877864741c'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'location_code'
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
                        table: 'sys_ui_element'
                        id: '90e802e9e85e4da1a44e812901b27b98'
                        key: {
                            sys_ui_section: '6b6a0163eb123100a618afcef106fea2'
                            element: 'x_1863667_csm_cancel_reason'
                            position: '21'
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
                        table: 'sys_security_acl_role'
                        id: '974009c26a8d4c269405d4e1ecfa1c7c'
                        key: {
                            sys_security_acl: 'b06215bad746404a9015a597efaca3c8'
                            sys_user_role: {
                                id: 'e813f5e7b5124caa98b3eb88d30c934a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '976715b677d54b14a49c4d434299d2b5'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_location_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97b6f40115b441eab2be7b496faa41f0'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'NULL'
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
                        table: 'sys_user_role_contains'
                        id: '9929d164bcb344b29cded294da5b1106'
                        key: {
                            role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
                            contains: {
                                id: 'd7625815ac234afaa832f7c8b4316444'
                                key: {
                                    name: 'sn_customerservice.case_admin'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '9ba36c80fc914749b92fa2b67e37dc29'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_hw_request_type'
                            position: '101'
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
                        id: '9c113f26bc794151924658022418a5f3'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c37e77f3bae4991a1c70c433730b40c'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'title'
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
                        table: 'sys_user_role'
                        id: '9f21882b1ee9465fb1da28d86090da18'
                        key: {
                            name: 'x_1863667_csm.l3_2_specialist'
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
                        id: 'a01190d62d554c549ba121a0594d66f3'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'user_name'
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
                        table: 'sys_documentation'
                        id: 'a2119cf073624a0c8987379cd796f8f5'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'first_name'
                            language: 'en'
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
                        id: 'a29b17b0fa4648dcad5e1786910f1df1'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'manager_user_name'
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
                        table: 'sys_documentation'
                        id: 'a3513960094f4a55950bfa55b4d0ed7a'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'active'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: 'a5cac8690d9646879bbc465eb04658ce'
                        key: {
                            sys_security_acl: '72220e7c88d5402fb175d4482bc365fd'
                            sys_user_role: {
                                id: 'deeb20e79e2a4956aafbb5e9b0b60fb1'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'item_option_new'
                        id: 'aa4654662849403ba5a1c359ab7d499f'
                        key: {
                            cat_item: 'f76a4148505b44ebbf8021c2af5e017e'
                            variable_set: 'NULL'
                            name: 'asset'
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
                        table: 'sys_security_acl_role'
                        id: 'aaaf2eeba3dd47f590694cd25b54edd9'
                        key: {
                            sys_security_acl: '1beaa76351ce49628ec451268fe9adb0'
                            sys_user_role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
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
                        table: 'sys_user_role_contains'
                        id: 'ab98f2fb783f4e4982bf24f61a3c1040'
                        key: {
                            role: {
                                id: 'd3d0ad3db4da46d8961b56c12cac2f62'
                                key: {
                                    name: 'x_1863667_csm.customer_contact'
                                }
                            }
                            contains: {
                                id: 'be0fd43348b74cedb8a929e9b886c5c1'
                                key: {
                                    name: 'sn_customerservice.customer'
                                }
                            }
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
                        table: 'sys_choice'
                        id: 'ac4bce37dda0490486b8cd7b68548e17'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_on_hold_reason'
                            value: 'awaiting_spare_part'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad09a875db8241b098976407326cd3a6'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'direction'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad2f992d658843ea8044cb19643e86ab'
                        key: {
                            sys_security_acl: 'e37ed776f4c145899c14b8619ab59fd7'
                            sys_user_role: {
                                id: 'e813f5e7b5124caa98b3eb88d30c934a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad3533fb71704972a1b5c0e89a962e66'
                        key: {
                            sys_security_acl: 'e37ed776f4c145899c14b8619ab59fd7'
                            sys_user_role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ad68fcc25ad140eda6d50535151a4d1a'
                        key: {
                            name: 'cmn_location'
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
                        table: 'sys_security_acl_role'
                        id: 'ae4484f47533434bb27d2c6da33853c6'
                        key: {
                            sys_security_acl: 'a2a85500feb6493fb493d8d307c3979e'
                            sys_user_role: {
                                id: 'deeb20e79e2a4956aafbb5e9b0b60fb1'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'sys_ui_action_role'
                        id: 'aef9bf1edf23497d9fdb24b8d6b9a746'
                        key: {
                            sys_ui_action: '1113f74344c946e492df4cb021788ebe'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
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
                        table: 'sys_choice'
                        id: 'b2188c3fe2db496dbc9360c91f641ae6'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'direction'
                            value: 'deescalation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2202ac8bf894fc3b626a16f205e3877'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b233b7e68ae341a1b4dd2d273b537826'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'performed_by'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: 'b424f3faae244cd4b4ffe2a853f3171f'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
                            value: 'email'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b491e5b4339e4935b7b880f13c57b6ff'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'case'
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
                        table: 'sys_ui_element'
                        id: 'b4bfaa34c2c04b22a19acc89f4c0068a'
                        key: {
                            sys_ui_section: '9484277dc312310015519f2974d3aecd'
                            element: 'x_1863667_csm_workaround_provided'
                            position: '104'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b4ed5ed2fb5446478161e72caf3992c8'
                        key: {
                            sys_security_acl: 'f247a2bbc13144d19333c98fead371f2'
                            sys_user_role: {
                                id: 'e813f5e7b5124caa98b3eb88d30c934a'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
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
                        id: 'b88c00c5b2544014ae75029b0fc23ca4'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'name'
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
                        table: 'sys_choice'
                        id: 'bd74bf677b4243f1925e9d67c8aa14c6'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'direction'
                            value: 'escalation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be267c5c978a46379d74fb87f39ef92b'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be2cdf68449542729279300b796b7e83'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be3015b2bede46f6a1f90a48ce0973c9'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'urgency'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: 'bf2a7ea6c5804116a6ae6412050d0450'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'first_name'
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
                        id: 'c10fbee386e24b379d2df37b94df9dcd'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'title'
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
                        table: 'sys_choice'
                        id: 'c526038036c84f80bbac1cb9787eccd2'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_on_hold_reason'
                            value: 'awaiting_customer'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_choice_set'
                        id: 'c5c2c5ad8dee4fc996e48c8b27532e04'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_location_type'
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
                        table: 'sys_security_acl_role'
                        id: 'c71abef412ee4d0695a2d8ecbcf761e5'
                        key: {
                            sys_security_acl: 'f247a2bbc13144d19333c98fead371f2'
                            sys_user_role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c7454fc852bc467bb28d124c4cf06b5a'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
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
                        table: 'sys_security_acl_role'
                        id: 'c7977f55df3a4a3aa41a5d98a64e6887'
                        key: {
                            sys_security_acl: 'f247a2bbc13144d19333c98fead371f2'
                            sys_user_role: {
                                id: 'deeb20e79e2a4956aafbb5e9b0b60fb1'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'item_option_new'
                        id: 'c9433f6942bd43919446f200c98a4385'
                        key: {
                            cat_item: 'eaacc773dd164e2cb6ebea7ba85bb8b3'
                            variable_set: 'NULL'
                            name: 'install_base_item'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ca98c18421e4451b93b66353b5ce805c'
                        key: {
                            sys_security_acl: 'b06215bad746404a9015a597efaca3c8'
                            sys_user_role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cafd13f4ae45429bb411ba65a4a66d56'
                        key: {
                            name: 'sys_user_group'
                            element: 'x_1863667_csm_tier'
                            value: 'l3_1'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_choice'
                        id: 'cba6881008544f1193503ec887e27688'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_location_type'
                            value: 'headquarters'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_db_object'
                        id: 'cc954777ca364d5285fb61e3e9775ef5'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd21254878b141fa8ba4760479361166'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'urgency'
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
                        table: 'ua_table_licensing_config'
                        id: 'cdcffd73c91347c5bc331a58f8499eef'
                        key: {
                            name: 'cmn_location'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ce18cf3b1c2b4317ab012d8a694b9ead'
                        key: {
                            ui_policy: {
                                id: 'db9ddef842bf42d088e419cd3c3e8f15'
                                key: {
                                    table: 'sn_customerservice_case'
                                    short_description: 'On hold reason mandatory when Awaiting Info'
                                }
                            }
                            field: 'x_1863667_csm_on_hold_reason'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ce5a39da28b3489d9056d4957485faad'
                        key: {
                            map: '07f37e5a498c4a5da9e16aeffab08687'
                            target_field: 'user_name'
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
                        table: 'sys_user_role_contains'
                        id: 'd0b57212230844418c202bbaac91c521'
                        key: {
                            role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
                            contains: {
                                id: '0033caf641ff461a9dfc71df96b93ede'
                                key: {
                                    name: 'x_1863667_csm.account_scoped'
                                }
                            }
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
                        table: 'sys_dictionary'
                        id: 'd162307f262b460f96870c4ed5478a23'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd18dc06b4e264a38883db9d84788d04c'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'location'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: 'd1ef2c83af134d58b797fe36b5253936'
                        key: {
                            sys_security_acl: 'b06215bad746404a9015a597efaca3c8'
                            sys_user_role: {
                                id: 'deeb20e79e2a4956aafbb5e9b0b60fb1'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'd2d1b775e12a4cf583da197258ad57c7'
                        key: {
                            sys_security_acl: '72220e7c88d5402fb175d4482bc365fd'
                            sys_user_role: {
                                id: 'd49954f036df4a96a27b4a8caacb3bcb'
                                key: {
                                    name: 'x_1863667_csm.l3_1_agent'
                                }
                            }
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
                        table: 'sys_user_role'
                        id: 'd3d0ad3db4da46d8961b56c12cac2f62'
                        key: {
                            name: 'x_1863667_csm.customer_contact'
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
                        table: 'sys_user_role'
                        id: 'd49954f036df4a96a27b4a8caacb3bcb'
                        key: {
                            name: 'x_1863667_csm.l3_1_agent'
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
                        table: 'sys_security_acl_role'
                        id: 'd548832be0f947109dcd0954f1ccb6f8'
                        key: {
                            sys_security_acl: 'a2a85500feb6493fb493d8d307c3979e'
                            sys_user_role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
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
                        id: 'd6184ba34e20416298e56bf167ffbde7'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'active'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: 'd852c6ad853d461bb0fdc6ee1e1f5687'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_cancel_reason'
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
                        table: 'ua_table_licensing_config'
                        id: 'd90f14a00f16406ab1dd9f3bd11a7891'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da67a168644940199f9a92660e761df4'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'l2_group'
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
                        table: 'sys_ui_policy'
                        id: 'db9ddef842bf42d088e419cd3c3e8f15'
                        key: {
                            table: 'sn_customerservice_case'
                            short_description: 'On hold reason mandatory when Awaiting Info'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc8639ff50cd4eaba8c1713def0c48e8'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dd1516f042e347959435575d6a530cbb'
                        key: {
                            cat_item: 'eaacc773dd164e2cb6ebea7ba85bb8b3'
                            variable_set: 'NULL'
                            name: 'short_description'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'de3429d845d1443cb57381230f383821'
                        key: {
                            map: '6279be55157a4741b983a8ece289646e'
                            target_field: 'manager'
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
                        table: 'sys_documentation'
                        id: 'df33185e9df84f848d6b963f31ae0d2e'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_supplier_reference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dfbeeafae1604466b8df137146bcb8d6'
                        key: {
                            sys_security_acl: 'f247a2bbc13144d19333c98fead371f2'
                            sys_user_role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e00666e480404078825d9ea40ba9df5b'
                        key: {
                            ui_policy: {
                                id: '39367855599f48379c90bdf18bb85d54'
                                key: {
                                    table: 'sn_customerservice_case'
                                    short_description: 'Cancellation reason mandatory when cancelling'
                                }
                            }
                            field: 'x_1863667_csm_cancel_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e0131d21f5bf444eb024224959afba76'
                        key: {
                            sys_security_acl: '72220e7c88d5402fb175d4482bc365fd'
                            sys_user_role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'm2m_sp_portal_search_source'
                        id: 'e0711db3b338430ab25a15f4a2eac2e2'
                        key: {
                            sp_portal: 'a6ef65a1dd934e43ad39ebb50260e435'
                            sp_search_source: '76b4b55c7abf4930b4a730e63c831a8b'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e10358ace7ed45aeba3b60a50931829f'
                        key: {
                            cat_item: 'f76a4148505b44ebbf8021c2af5e017e'
                            variable_set: 'NULL'
                            name: 'description'
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
                        table: 'sys_documentation'
                        id: 'e451883cd16d4a92b9f628951a198f85'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_workaround_provided'
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
                        table: 'sys_dictionary'
                        id: 'e46e74c7050f40d0b65031133a5ee458'
                        key: {
                            name: 'x_1863667_csm_routing_rule'
                            element: 'active'
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
                        id: 'e655897627ee4ed0960bb6cb263a41e4'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_on_hold_reason'
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
                        id: 'e72a7d9e573b4d7eb525762fa42e0c62'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'from_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e77a8adc2c8f4965b562d51433cc2f66'
                        key: {
                            map: '6279be55157a4741b983a8ece289646e'
                            target_field: 'location'
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
                        table: 'sys_documentation'
                        id: 'e8a0b53c592f4f4eb98646c03cb73c09'
                        key: {
                            name: 'x_1863667_csm_priority_matrix'
                            element: 'priority'
                            language: 'en'
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
                        id: 'e90bb0ace9d74a348704c0dc00a92e30'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9cdc2cc07a448d6876d4eae80ae109c'
                        key: {
                            sys_ui_section: '6b6a0163eb123100a618afcef106fea2'
                            element: 'x_1863667_csm_closed_by'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea0bc6129eae4712ac992bee08d5f28e'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'account_code'
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
                        table: 'sys_choice'
                        id: 'eaed69b7d3aa46e3abb9f79c38dc6cfb'
                        key: {
                            name: 'cmn_location'
                            element: 'x_1863667_csm_location_type'
                            value: 'site'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_dictionary'
                        id: 'ee302c0728aa47ecb8c29ff0e9c9ae0b'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_workaround_provided'
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
                        id: 'f11d99dcd3e740fc8541fae52cd69caa'
                        key: {
                            name: 'x_1863667_csm_stg_agent'
                            element: 'group_names'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: 'f22edd4812664a95934713388a6a99a9'
                        key: {
                            sys_security_acl: 'f247a2bbc13144d19333c98fead371f2'
                            sys_user_role: {
                                id: '64a16f40852f495f83d3cb14c6565d19'
                                key: {
                                    name: 'x_1863667_csm.admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'f436000ca25f464fb12f4f2e86105a9e'
                        key: {
                            sys_security_acl: 'b06215bad746404a9015a597efaca3c8'
                            sys_user_role: {
                                id: '3882a594b35d44aea662319e05b0b501'
                                key: {
                                    name: 'x_1863667_csm.l2_agent'
                                }
                            }
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
                        table: 'ua_table_licensing_config'
                        id: 'f4ffff1ec0da44a3bdd67357c9c4c25d'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
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
                        table: 'sys_documentation'
                        id: 'f586aec2ed7048ccbd47b9ebb1707926'
                        key: {
                            name: 'x_1863667_csm_stg_stockroom'
                            element: 'manager_user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f59bef4fcca74cfc8f85181584252cf2'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_escalation_reason'
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
                        id: 'f78c0dabfae84e829717c3113def16a3'
                        key: {
                            name: 'x_1863667_csm_escalation_log'
                            element: 'reason'
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
                        table: 'sys_choice'
                        id: 'fd05e748bb1c4ba09963a83eebcef008'
                        key: {
                            name: 'sn_customerservice_case'
                            element: 'x_1863667_csm_channel'
                            value: 'portal'
                            language: 'en'
                            dependent_value: 'NULL'
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
