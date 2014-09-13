P.scout.init({
     "page_load_request_identifier": "479307821399",
     "streaming": true,
     "page_route_pattern": "",
     "facebook_key": "274266067164",
     "context": {
         "ios_deep_link": "pinterest:\/\/",
         "app_version": "c977b88",
         "android_deep_link": "pinterest:\/\/",
         "placed_experiences": {
             "10": {
                 "display_data": {},
                 "triggerable_placed_exps": [],
                 "experience_id": 10000,
                 "type": "1",
                 "id": "10:10000",
                 "cacheable_resources": []
             },
             "13": {
                 "display_data": {},
                 "triggerable_placed_exps": ["13:10050", "13:10028"],
                 "experience_id": 1,
                 "type": "1",
                 "id": "13:1",
                 "cacheable_resources": []
             },
             "14": {
                 "display_data": {},
                 "triggerable_placed_exps": [],
                 "experience_id": 10022,
                 "type": "1",
                 "id": "14:10022",
                 "cacheable_resources": []
             },
             "15": {
                 "display_data": {},
                 "triggerable_placed_exps": [],
                 "experience_id": 10051,
                 "type": "1",
                 "id": "15:10051",
                 "cacheable_resources": []
             },
             "22": {
                 "display_data": {},
                 "triggerable_placed_exps": [],
                 "experience_id": 10000,
                 "type": "1",
                 "id": "22:10000",
                 "cacheable_resources": []
             },
             "24": {
                 "display_data": {},
                 "triggerable_placed_exps": [],
                 "experience_id": 10000,
                 "type": "1",
                 "id": "24:10000",
                 "cacheable_resources": []
             }
         }
     },
     "routes": [{
         "extraContent": {
             "allow_full_page": false,
             "resource_method": "${method}",
             "append": "?{append}"
         },
         "named": {
             "name": 0,
             "method": 1
         },
         "resource": {
             "name": "${name}",
             "options": "?{options}"
         },
         "module": "?{module_name}",
         "pathPattern": "^\/resource\/([^\/]+)\/([^\/]+)\/$",
         "options": "?{module_options}"
     }, {
         "extraContent": {
             "allow_full_page": false,
             "error_strategy": "?{error_strategy}",
             "append": "?{append}"
         },
         "named": {
             "name": 0
         },
         "resource": {
             "name": "?{resource_name}",
             "options": "?{options}"
         },
         "module": "${name}",
         "pathPattern": "^\/module\/([^\/]+)\/$",
         "options": "?{module_options}"
     }, {
         "extraContent": {
             "optimizely_eligible_page": true,
             "content_only": true,
             "https": true
         },
         "named": {
             "network": 0
         },
         "resource": {},
         "module": "UserRegisterPage",
         "pathPattern": "^\/join\/register\/([^\/]+)\/",
         "options": {
             "auto_follow_interest": "?{auto_follow_interest}",
             "prev": "?{prev}",
             "network": "${network}",
             "next": "?{next}"
         }
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {
             "reason": 0
         },
         "resource": {},
         "module": "UserRegisterRestricted",
         "pathPattern": "^\/join\/restricted\/([^\/]+)\/",
         "options": {
             "reason": "${reason}"
         }
     }, {
         "extraContent": {
             "redirect": "\/?following_page_redirect=true"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/following\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true,
             "login_parameters": {
                 "username": "${username}",
                 "auto_follow": "true"
             }
         },
         "named": {
             "username": 0
         },
         "resource": {},
         "module": "AutoFollow",
         "pathPattern": "^\/follow\/([^\/]+)\/*$",
         "options": {
             "username": "${username}"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "login_parameters": {
                 "username": "${username}",
                 "boardname": "${slug}",
                 "auto_follow": "true"
             }
         },
         "named": {
             "username": 0,
             "slug": 1
         },
         "resource": {},
         "module": "AutoFollow",
         "pathPattern": "^\/follow\/([^\/]+)\/([^\/]+)\/*$",
         "options": {
             "username": "${username}",
             "username_and_slug": "${username}\/${slug}"
         }
     }, {
         "extraContent": {
             "content_only": true
         },
         "named": {},
         "resource": {},
         "module": "LogoutPage",
         "pathPattern": "^\/logout\/",
         "options": {
             "next": "?{next}"
         }
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "view_parameter": 2,
                 "view_type": 1
             }
         },
         "named": {},
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/all\/$",
         "options": {
             "feed": "everything"
         }
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "view_parameter": 2,
                 "view_type": 1
             },
             "canonical_url": "\/all\/"
         },
         "named": {},
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/all\/everything\/$",
         "options": {
             "feed": "everything"
         }
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "helper_data": {
                     "feed": "${category}",
                     "is_category": true
                 },
                 "view_type": 1
             }
         },
         "named": {
             "category": 0
         },
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/all\/([^\/]+)\/$",
         "options": {
             "feed": "${category}",
             "is_category": true
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/conversation\/${conversation_id}",
             "android_deep_link": "pinterest:\/\/conversation\/${conversation_id",
             "log": {
                 "view_parameter": 92,
                 "view_type": 1
             }
         },
         "named": {
             "conversation_id": 0
         },
         "resource": {},
         "module": "HomePage",
         "pathPattern": "^\/conversation\/([^\/]+)\/*$",
         "options": {
             "auto_follow_interest": "?{auto_follow_interest}",
             "allow_nux": "?{allow_nux}",
             "email_updated": "?{ues}",
             "tab": "following"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "ManagedListResource",
             "options": {
                 "field_set_key": "grid_item",
                 "shuffle": true,
                 "domain": "place_pins",
                 "list": "examples",
                 "page_size": 24
             }
         },
         "module": "promo.PlacesBoardExamples",
         "pathPattern": "^\/places\/examples\/$",
         "options": {}
     }, {
         "extraContent": {
             "redirect": "\/nbctv\/the-66th-primetime-emmys\/"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/emmysnbc\/$",
         "options": {}
     }, {
         "extraContent": {
             "redirect": "\/nbctv\/the-66th-primetime-emmys\/"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/nbcemmys\/$",
         "options": {}
     }, {
         "extraContent": {
             "redirect": "\/nbctv\/the-66th-primetime-emmys\/"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/primetimeemmys\/$",
         "options": {}
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "view_parameter": 3,
                 "view_type": 1
             },
             "canonical_url": "\/all\/popular\/"
         },
         "named": {},
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/popular\/$",
         "options": {
             "feed": "popular"
         }
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "view_parameter": 85,
                 "view_type": 1
             },
             "canonical_url": "\/all\/gifts\/"
         },
         "named": {},
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/gifts\/$",
         "options": {
             "feed": "gifts",
             "low_price": "?{low_price}",
             "high_price": "?{high_price}"
         }
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "view_parameter": 128,
                 "view_type": 1
             },
             "canonical_url": "\/all\/videos\/"
         },
         "named": {},
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/videos\/$",
         "options": {
             "feed": "videos"
         }
     }, {
         "extraContent": {
             "log": {
                 "view_parameter": 136,
                 "helper_data": {
                     "interest": "${interest}"
                 },
                 "view_type": 1
             },
             "canonical_url": "\/explore\/${interest}\/"
         },
         "named": {
             "interest": 0
         },
         "resource": {
             "name": "InterestResource",
             "options": {
                 "interest": "${interest}"
             }
         },
         "module": "InterestFeedPage",
         "pathPattern": "^\/explore\/([^\/]+)\/$",
         "options": {
             "auto_follow": "?{auto_follow}",
             "interest": "${interest}"
         }
     }, {
         "extraContent": {
             "log": {
                 "view_parameter": 43,
                 "view_type": 2
             }
         },
         "named": {},
         "resource": {
             "name": "BaseSearchResource",
             "options": {
                 "scope": "pins",
                 "query": "?{q}"
             }
         },
         "module": "SearchPage",
         "pathPattern": "^\/search\/$",
         "options": {
             "scope": "pins",
             "query": "?{q}"
         }
     }, {
         "extraContent": {
             "log": {
                 "helper_data": {
                     "scope": "${scope}"
                 },
                 "view_type": 2
             }
         },
         "named": {
             "scope": 0
         },
         "resource": {
             "name": "BaseSearchResource",
             "options": {
                 "restrict": "?{restrict}",
                 "scope": "${scope}",
                 "constraint_string": "?{fc}",
                 "show_scope_selector": true,
                 "query": "?{q}"
             }
         },
         "module": "SearchPage",
         "pathPattern": "^\/search\/([^\/]+)\/$",
         "options": {
             "restrict": "?{restrict}",
             "scope": "${scope}",
             "constraint_string": "?{fc}",
             "show_scope_selector": true,
             "query": "?{q}"
         }
     }, {
         "extraContent": {
             "log": {
                 "view_parameter": 181,
                 "helper_data": {
                     "scope": "boards"
                 },
                 "view_type": 2
             }
         },
         "named": {},
         "resource": {
             "name": "BaseSearchResource",
             "options": {
                 "scope": "boards",
                 "layout": "places",
                 "show_scope_selector": true,
                 "query": "?{q}"
             }
         },
         "module": "SearchPage",
         "pathPattern": "^\/search\/boards\/places\/$",
         "options": {
             "query": "?{q}",
             "layout": "places",
             "scope": "boards"
         }
     }, {
         "extraContent": {
             "log": {
                 "helper_data": {
                     "ingredient": "${ingredient}"
                 },
                 "view_type": 28
             }
         },
         "named": {
             "ingredient": 0
         },
         "resource": {
             "name": "RecipePagesResource",
             "options": {
                 "scope": "recipes",
                 "show_scope_selector": false,
                 "query": "${ingredient}"
             }
         },
         "module": "RecipeFeedPage",
         "pathPattern": "^\/recipes\/([^\/]+)\/$",
         "options": {
             "ingredient": "${ingredient}"
         }
     }, {
         "extraContent": {},
         "named": {
             "query": 0
         },
         "resource": {
             "name": "BrowseResource",
             "options": {
                 "query": "${query}"
             }
         },
         "module": "SearchPage",
         "pathPattern": "^\/browse\/([^\/]+)\/$",
         "options": {
             "query": "${query}"
         }
     }, {
         "extraContent": {
             "content_only": true
         },
         "named": {},
         "resource": {},
         "module": "OffsitePage",
         "pathPattern": "^\/offsite\/$",
         "options": {
             "redirect_status": "?{redirect_status}",
             "sanitized_url": "?{sanitized_url}"
         }
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {
             "name": "OAuthAuthorizationResource",
             "options": {
                 "scope": "?{scope}",
                 "state": "?{state}",
                 "redirect_uri": "?{redirect_uri}",
                 "response_type": "?{response_type}",
                 "consumer_id": "?{consumer_id}"
             }
         },
         "module": "OAuthPage",
         "pathPattern": "^\/oauth\/$",
         "options": {
             "scope": "?{scope}",
             "state": "?{state}",
             "redirect_uri": "?{redirect_uri}",
             "response_type": "?{response_type}",
             "consumer_id": "?{consumer_id}"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "OAuthDialog",
         "pathPattern": "^\/oauth\/dialog\/$",
         "options": {
             "scope": "?{scope}",
             "state": "?{state}",
             "redirect_uri": "?{redirect_uri}",
             "response_type": "?{response_type}",
             "consumer_id": "?{consumer_id}"
         }
     }, {
         "extraContent": {
             "suppress_nags": true,
             "https": true
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "VerifyEmailTokenResource",
             "options": {
                 "username": "${username}",
                 "token": "?{t}",
                 "expiration": "?{e}"
             }
         },
         "module": "ResetPasswordPage",
         "pathPattern": "^\/pw\/([^\/]+)\/$",
         "options": {
             "username": "${username}",
             "token": "?{t}",
             "expiration": "?{e}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "FindPinImagesResource",
             "options": {
                 "url": "?{url}"
             }
         },
         "module": "ImagesFeedPage",
         "pathPattern": "^\/pin\/find\/$",
         "options": {
             "url": "?{url}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {},
         "module": "DomainVerifyByLink",
         "pathPattern": "^\/website\/verify\/link\/",
         "options": {
             "domain": "?{domain}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {},
         "module": "EmailVerificationError",
         "pathPattern": "\/email_verification_error\/$",
         "options": {}
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "BusinessAccountCreate",
         "pathPattern": "^\/business\/create\/",
         "options": {}
     }, {
         "extraContent": {},
         "named": {},
         "resource": {},
         "module": "BusinessTOS",
         "pathPattern": "^\/business\/tos\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true,
             "content_only": true,
             "log": {
                 "view_parameter": 119,
                 "view_type": 12
             }
         },
         "named": {
             "method": 0
         },
         "resource": {},
         "module": "PinBookmarklet",
         "pathPattern": "^\/pin\/create\/([^\/]+)\/$",
         "options": {
             "description": "?{description}",
             "title": "?{title}",
             "url": "?{url}",
             "image_url": "?{media}",
             "is_video": "?{is_video}",
             "method": "${method}"
         }
     }, {
         "extraContent": {
             "suppress_nags": true,
             "suppress_nag_download": true,
             "suppress_js_nag": true,
             "https": true
         },
         "named": {},
         "resource": {
             "name": "SignedEmailSubscriptionResource",
             "options": {
                 "od": "?{od}",
                 "user_id": "?{user_id}"
             }
         },
         "module": "SignedEmailUnsubscribePage",
         "pathPattern": "^\/email\/subscription\/$",
         "options": {}
     }, {
         "extraContent": {
             "suppress_nags": true,
             "suppress_nag_download": true,
             "suppress_js_nag": true,
             "https": true
         },
         "named": {},
         "resource": {
             "name": "SignedEmailSettingsResource",
             "options": {
                 "od": "?{od}",
                 "user_id": "?{user_id}"
             }
         },
         "module": "SignedEmailSettingsPage",
         "pathPattern": "^\/email\/settings\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {
             "country": 0,
             "pinpick": 1
         },
         "resource": {
             "name": "PinPicksResource",
             "options": {
                 "pinpickname": "${pinpick}",
                 "country": "${country}"
             }
         },
         "module": "PinPicksDetail",
         "pathPattern": "^\/pinpicks\/([^\/]+)\/([^\/]+)\/$",
         "options": {}
     }, {
         "extraContent": {
             "suppress_nags": true,
             "suppress_nag_download": true,
             "suppress_js_nag": true,
             "https": true
         },
         "named": {},
         "resource": {
             "name": "SignedEmailAssociationResource",
             "options": {
                 "od": "?{od}",
                 "user_id": "?{user_id}"
             }
         },
         "module": "SignedEmailDisassociatePage",
         "pathPattern": "^\/email\/remove\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {
             "locale": 0,
             "url_name": 1
         },
         "resource": {
             "name": "EditorialResource",
             "options": {
                 "locale": "${locale}",
                 "url_name": "${url_name}"
             }
         },
         "module": "Editorial",
         "pathPattern": "^\/editorial\/([^\/]+)\/([^\/]+)\/$",
         "options": {}
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/",
             "android_deep_link": "pinterest:\/\/",
             "log": {
                 "view_parameter": 92,
                 "view_type": 1
             },
             "content_only_if_unauth": true,
             "optimizely_eligible_page": true,
             "https_if_unauth": true,
             "show_categories_bar": true
         },
         "named": {},
         "resource": {},
         "module": "HomePage",
         "pathPattern": "^\/$",
         "options": {
             "signup_email": "?{email}",
             "auto_follow_interest": "?{auto_follow_interest}",
             "allow_nux": "?{allow_nux}",
             "tab": "following",
             "email_updated": "?{ues}",
             "following_page_redirect": "?{following_page_redirect}"
         }
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "view_type": 19
             }
         },
         "named": {},
         "resource": {},
         "module": "CategoriesPage",
         "pathPattern": "^\/categories\/$",
         "options": {}
     }, {
         "extraContent": {
             "show_categories_bar": true,
             "log": {
                 "helper_data": {
                     "feed": "${category}",
                     "is_category": true
                 },
                 "view_type": 1
             },
             "canonical_url": "\/all\/${category}\/"
         },
         "named": {
             "category": 0
         },
         "resource": {},
         "module": "FeedPage",
         "pathPattern": "^\/categories\/([^\/]+)\/$",
         "options": {
             "feed": "${category}",
             "is_category": true
         }
     }, {
         "extraContent": {
             "redirect": "\/categories\/"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/explore\/$",
         "options": {}
     }, {
         "extraContent": {
             "log": {
                 "view_parameter": 43,
                 "view_type": 2
             }
         },
         "named": {},
         "resource": {
             "name": "BaseSearchResource",
             "options": {
                 "scope": "pins",
                 "boost": "recent_week",
                 "show_scope_selector": true,
                 "query": "?{q}"
             }
         },
         "module": "SearchPage",
         "pathPattern": "^\/search\/pins\/recent\/$",
         "options": {
             "query": "?{q}",
             "boost": "recent_week",
             "scope": "pins"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "VisualSearchResource"
         },
         "module": "VisualSearchPage",
         "pathPattern": "^\/visualsearch\/browse\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {
             "browse_object": 0
         },
         "resource": {
             "name": "VisualSearchResource",
             "options": {
                 "browse_object": "${browse_object}"
             }
         },
         "module": "VisualSearchPage",
         "pathPattern": "^\/visualsearch\/browse\/([^\/]+)\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {
             "id": 0
         },
         "resource": {
             "name": "VisualSearchResource",
             "options": {
                 "pin_id": "${id}"
             }
         },
         "module": "VisualSearchPage",
         "pathPattern": "^\/visualsearch\/([^\/]+)\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {
             "obj": 1,
             "id": 0
         },
         "resource": {
             "name": "VisualSearchResource",
             "options": {
                 "pin_id": "${id}",
                 "obj_id": "${obj}"
             }
         },
         "module": "VisualSearchPage",
         "pathPattern": "^\/visualsearch\/([^\/]+)\/([^\/]+)\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {
             "type": 0,
             "id": 1
         },
         "resource": {
             "name": "VisualSearchResource",
             "options": {
                 "pin_type": "${type}",
                 "pin_id": "${id}"
             }
         },
         "module": "VisualSearchPage",
         "pathPattern": "^\/search\/([^\/]+)\/([^\/]+)\/$",
         "options": {
             "pin_type": "${type}",
             "pin_id": "${id}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {},
         "module": "CsrfErrorPage",
         "pathPattern": "\/csrf_error\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 129,
                 "view_type": 1
             }
         },
         "named": {
             "domain": 0
         },
         "resource": {
             "name": "DomainResource",
             "options": {
                 "field_set_key": "access",
                 "domain": "${domain}"
             }
         },
         "module": "DomainFeedPage",
         "pathPattern": "^\/source\/([^\/]+)\/$",
         "options": {
             "domain": "${domain}",
             "feed_item_type": "most_recent"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 129,
                 "view_type": 1
             }
         },
         "named": {
             "domain": 0
         },
         "resource": {
             "name": "DomainResource",
             "options": {
                 "field_set_key": "access",
                 "domain": "${domain}"
             }
         },
         "module": "DomainFeedPage",
         "pathPattern": "^\/source\/([^\/]+)\/top\/repins\/$",
         "options": {
             "domain": "${domain}",
             "feed_item_type": "most_repinned",
             "aggregation": "?{aggregation}",
             "end_date": "?{end_date}"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 129,
                 "view_type": 1
             }
         },
         "named": {
             "domain": 0
         },
         "resource": {
             "name": "DomainResource",
             "options": {
                 "field_set_key": "access",
                 "domain": "${domain}"
             }
         },
         "module": "DomainFeedPage",
         "pathPattern": "^\/source\/([^\/]+)\/top\/clicks\/$",
         "options": {
             "domain": "${domain}",
             "feed_item_type": "most_clicked",
             "aggregation": "?{aggregation}",
             "end_date": "?{end_date}"
         }
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {
             "domain": 0
         },
         "resource": {},
         "module": "DomainQuestionsPage",
         "pathPattern": "^\/source\/([^\/]+)\/questions\/$",
         "options": {
             "domain": "${domain}",
             "feed_item_type": "questions",
             "start_date": "?{start_date}",
             "end_date": "?{end_date}"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 135,
                 "view_type": 30
             }
         },
         "named": {},
         "resource": {},
         "module": "FindFriends",
         "pathPattern": "^\/find_friends\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 135,
                 "view_type": 30
             }
         },
         "named": {},
         "resource": {},
         "module": "FindFriends",
         "pathPattern": "^\/find_friends\/facebook\/$",
         "options": {
             "tab": "facebook"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 135,
                 "view_type": 30
             }
         },
         "named": {},
         "resource": {},
         "module": "FindFriends",
         "pathPattern": "^\/find_friends\/twitter\/$",
         "options": {
             "tab": "twitter"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "log": {
                 "view_parameter": 135,
                 "view_type": 30
             }
         },
         "named": {},
         "resource": {},
         "module": "FindFriends",
         "pathPattern": "^\/find_friends\/invite\/$",
         "options": {
             "focus": "invite"
         }
     }, {
         "extraContent": {
             "content_only_if_unauth": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "InviteLanding",
         "pathPattern": "^\/invited\/$",
         "options": {
             "inviter_user_id": "?{inviter_user_id}"
         }
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {},
         "resource": {
             "name": "FeedEditorPageResource"
         },
         "module": "FeedEditorPage",
         "pathPattern": "^\/edit_home\/$",
         "options": {
             "tab": "follow_boards"
         }
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {},
         "resource": {
             "name": "FeedEditorPageResource"
         },
         "module": "FeedEditorPage",
         "pathPattern": "^\/edit_home\/follow_boards\/$",
         "options": {
             "tab": "follow_boards"
         }
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {},
         "resource": {
             "name": "FeedEditorPageResource"
         },
         "module": "FeedEditorPage",
         "pathPattern": "^\/edit_home\/unfollow_boards\/$",
         "options": {
             "tab": "unfollow_boards"
         }
     }, {
         "extraContent": {
             "is_full_page": false,
             "xframe_options_exempt": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "FramedSignupContent",
         "pathPattern": "^\/f\/signup\/",
         "options": {
             "track_key": "?{track_key}",
             "message_type": "?{message_type}",
             "skip_nux": "?{skip_nux}"
         }
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "LoginPage",
         "pathPattern": "^\/login\/$",
         "options": {
             "auto_follow_interest": "?{auto_follow_interest}",
             "prev": "?{prev}",
             "next": "?{next}"
         }
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "PasswordResetOneClick",
         "pathPattern": "^\/login\/reset\/$",
         "options": {
             "username_or_email": "?{username_or_email}"
         }
     }, {
         "extraContent": {
             "redirect": "\/"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/join\/signup\/",
         "options": {}
     }, {
         "extraContent": {
             "redirect": "\/"
         },
         "named": {},
         "resource": {},
         "module": "",
         "pathPattern": "^\/signup\/",
         "options": {}
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "LoginPage",
         "pathPattern": "^\/join\/register\/",
         "options": {
             "register": true
         }
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "LoginPage",
         "pathPattern": "^\/join\/.*$",
         "options": {
             "register": true,
             "invite_follow_user": "?{username}",
             "next": "?{next}",
             "auto_follow_interest": "?{auto_follow_interest}",
             "invite_follow_board": "?{boardname}",
             "prev": "?{prev}"
         }
     }, {
         "extraContent": {
             "content_only": true,
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "LogoutAppUpsell",
         "pathPattern": "^\/loggedout\/getapp\/",
         "options": {
             "username": "?{username}"
         }
     }, {
         "extraContent": {
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "InitiatePasswordReset",
         "pathPattern": "^\/password\/reset\/",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {},
         "resource": {
             "name": "DomainVerifyResource"
         },
         "module": "DomainVerify",
         "pathPattern": "^\/website\/verify\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {},
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "me"
             }
         },
         "module": "BusinessGetStarted",
         "pathPattern": "^\/business\/getstarted\/$",
         "options": {
             "username": "me"
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "https": true
         },
         "named": {},
         "resource": {
             "name": "PartnerResource"
         },
         "module": "BusinessAccountConvert",
         "pathPattern": "^\/business\/convert\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "RichPinDebugResource",
             "options": {
                 "link": "?{link}"
             }
         },
         "module": "RichPinDebugger",
         "pathPattern": "^\/business\/tools\/site-debugger\/$",
         "options": {
             "link": "?{link}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "RichPinSamplePinResource",
             "options": {}
         },
         "module": "RichPinBuilder",
         "pathPattern": "^\/business\/tools\/rich-pin-builder\/$",
         "options": {}
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "RichPinValidateResource",
             "options": {
                 "link": "?{link}"
             }
         },
         "module": "RichPinValidator",
         "pathPattern": "^\/business\/tools\/rich-pin-validator\/$",
         "options": {
             "link": "?{link}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "SubdomainResource"
         },
         "module": "InternationalSubdomains",
         "pathPattern": "^\/pinterest-international\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true,
             "require_explicit_login": true,
             "require_secure_cookie": true,
             "https": true
         },
         "named": {},
         "resource": {
             "name": "UserSettingsResource"
         },
         "module": "UserSettingsPage",
         "pathPattern": "^\/settings\/$",
         "options": {}
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "canonical_url": "\/${username}\/",
             "log": {
                 "view_parameter": 49,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/$",
         "options": {
             "show_redirected_memo": "?{redirected}",
             "report_user_spam": "?{report_user_spam}",
             "show_follow_memo": "?{auto_follow}",
             "tab": "boards"
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "log": {
                 "view_parameter": 49,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/boards\/$",
         "options": {
             "tab": "boards"
         }
     }, {
         "extraContent": {
             "sub_page": "pins\/",
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "log": {
                 "view_parameter": 74,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/pins\/$",
         "options": {
             "tab": "pins"
         }
     }, {
         "extraContent": {
             "noindex": true,
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "sub_page": "likes\/",
             "log": {
                 "view_parameter": 52,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/likes\/$",
         "options": {
             "tab": "likes"
         }
     }, {
         "extraContent": {
             "noindex": true,
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "sub_page": "followers\/",
             "log": {
                 "view_parameter": 50,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/followers\/$",
         "options": {
             "tab": "followers"
         }
     }, {
         "extraContent": {
             "noindex": true,
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "sub_page": "following\/",
             "log": {
                 "view_parameter": 51,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/following\/$",
         "options": {
             "tab": "following"
         }
     }, {
         "extraContent": {
             "noindex": true,
             "android_deep_link": "pinterest:\/\/user\/${username}",
             "ios_deep_link": "pinterest:\/\/user\/${username}",
             "sub_page": "following\/",
             "log": {
                 "view_parameter": 51,
                 "view_type": 4
             }
         },
         "named": {
             "username": 0,
             "following_type": 1
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}"
             }
         },
         "module": "UserProfilePage",
         "pathPattern": "^\/([^\/]+)\/following\/([^\/]+)\/$",
         "options": {
             "following_type": "${following_type}",
             "tab": "following"
         }
     }, {
         "extraContent": {
             "sub_page": "pins\/follow\/",
             "content_only": true
         },
         "named": {
             "username": 0
         },
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "${username}",
                 "field_set_key": "detailed"
             }
         },
         "module": "UserProfileFollow",
         "pathPattern": "^\/([^\/]+)\/pins\/follow\/$",
         "options": {}
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "NetworkStoryResource",
             "options": {
                 "story_id": "${id}"
             }
         },
         "module": "NetworkStoryLandingPage",
         "pathPattern": "^\/news\/([^\/]+)\/$",
         "options": {}
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/pin\/${id}",
             "android_deep_link": "pinterest:\/\/pin\/${id}",
             "log": {
                 "helper_data": {
                     "pin_id": "${id}"
                 },
                 "view_type": 3
             }
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "fetch_visual_search_objects": true,
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/$",
         "options": {
             "show_reg": "?{show_reg}",
             "sender": "?{sender}"
         }
     }, {
         "extraContent": {
             "content_only": true,
             "ios_deep_link": "pinterest:\/\/pin\/${id}",
             "android_deep_link": "pinterest:\/\/pin\/${id}",
             "canonical_url": "\/pin\/${id}\/",
             "https": true
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "SentPin",
         "pathPattern": "^\/pin\/([^\/]+)\/sent\/$",
         "options": {
             "sender": "?{sender}"
         }
     }, {
         "extraContent": {
             "android_deep_link": "pinterest:\/\/pin\/${id}",
             "ios_deep_link": "pinterest:\/\/pin\/${id}",
             "require_explicit_login": true,
             "log": {
                 "helper_data": {
                     "pin_id": "${id}"
                 },
                 "view_type": 3
             },
             "canonical_url": "\/pin\/${id}\/"
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/edit\/$",
         "options": {
             "show_edit": true
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/pin\/${id}",
             "android_deep_link": "pinterest:\/\/pin\/${id}",
             "log": {
                 "helper_data": {
                     "pin_id": "${id}"
                 },
                 "view_type": 3
             },
             "canonical_url": "\/pin\/${id}\/"
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/repin\/$",
         "options": {
             "show_repin": true
         }
     }, {
         "extraContent": {
             "require_authentication": true,
             "content_only": true
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "repin",
                 "id": "${id}"
             }
         },
         "module": "PinBookmarklet",
         "pathPattern": "^\/pin\/([^\/]+)\/repin\/x\/$",
         "options": {
             "action": "repin",
             "method": "bookmarklet",
             "default_repin_board_id": "?{bid}"
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/pin\/${id}",
             "android_deep_link": "pinterest:\/\/pin\/${id}",
             "log": {
                 "helper_data": {
                     "pin_id": "${id}"
                 },
                 "view_type": 3
             }
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/comments\/$",
         "options": {
             "show_reg": "?{show_reg}",
             "show_comments": true,
             "sender": "?{sender}"
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/pin_question\/${id}\/?question_id=${qid}",
             "android_deep_link": "pinterest:\/\/pin\/${id}\/question\/${qid}",
             "log": {
                 "helper_data": {
                     "pin_id": "${id}",
                     "question_id": "${qid}"
                 },
                 "view_type": 3
             }
         },
         "named": {
             "qid": 1,
             "id": 0
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/question\/([^\/]+)\/$",
         "options": {
             "show_reg": "?{show_reg}",
             "sender": "?{sender}",
             "question_id": "${qid}"
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/pin_answer\/${id}\/?question_id=${qid}&answer_id=${aid}",
             "android_deep_link": "pinterest:\/\/pin\/${id}\/question\/${qid}\/answer\/${aid}",
             "log": {
                 "helper_data": {
                     "pin_id": "${id}",
                     "answer_id": "${aid}",
                     "show_reply_answer_id": "${aid}",
                     "question_id": "${qid}"
                 },
                 "view_type": 3
             }
         },
         "named": {
             "qid": 1,
             "id": 0,
             "aid": 2
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/question\/([^\/]+)\/answer\/([^\/]+)\/$",
         "options": {
             "show_reg": "?{show_reg}",
             "answer_id": "${aid}",
             "show_reply_answer_id": "${aid}",
             "sender": "?{sender}",
             "question_id": "${qid}"
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/pin_reply\/${id}\/?question_id=${qid}&answer_id=${aid}",
             "android_deep_link": "pinterest:\/\/pin\/${id}\/question\/${qid}\/answer\/${aid}\/replies\/",
             "log": {
                 "helper_data": {
                     "pin_id": "${id}",
                     "answer_id": "${aid}",
                     "question_id": "${qid}"
                 },
                 "view_type": 3
             }
         },
         "named": {
             "qid": 1,
             "id": 0,
             "aid": 2
         },
         "resource": {
             "name": "PinResource",
             "options": {
                 "field_set_key": "detailed",
                 "id": "${id}"
             }
         },
         "module": "Closeup",
         "pathPattern": "^\/pin\/([^\/]+)\/question\/([^\/]+)\/answer\/([^\/]+)\/replies\/$",
         "options": {
             "show_reg": "?{show_reg}",
             "answer_id": "${aid}",
             "show_reply_answer_id": "${aid}",
             "sender": "?{sender}",
             "question_id": "${qid}"
         }
     }, {
         "extraContent": {
             "noindex": true
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "RepinFeedResource",
             "options": {
                 "pin_id": "${id}",
                 "page_size": 50
             }
         },
         "module": "RepinsLikesFeedPage",
         "pathPattern": "^\/pin\/([^\/]+)\/repins\/$",
         "options": {
             "pin_id": "${id}",
             "type": "repins"
         }
     }, {
         "extraContent": {
             "noindex": true
         },
         "named": {
             "id": 0
         },
         "resource": {
             "name": "PinLikesResource",
             "options": {
                 "pin_id": "${id}",
                 "page_size": 50
             }
         },
         "module": "RepinsLikesFeedPage",
         "pathPattern": "^\/pin\/([^\/]+)\/likes\/$",
         "options": {
             "pin_id": "${id}",
             "type": "likes"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {},
         "module": "BoardCreate",
         "pathPattern": "^\/board\/create\/$",
         "options": {}
     }, {
         "extraContent": {
             "redirect_on_404": "\/${username}\/?redirected=1",
             "android_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "ios_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "log": {
                 "view_type": 5
             }
         },
         "named": {
             "username": 0,
             "slug": 1
         },
         "resource": {
             "name": "BoardResource",
             "options": {
                 "username": "${username}",
                 "field_set_key": "detailed",
                 "slug": "${slug}"
             }
         },
         "module": "BoardPage",
         "pathPattern": "^\/([^\/]+)\/([^\/]+)\/$",
         "options": {
             "inviter_user_id": "?{inviter_user_id}",
             "show_follow_memo": "?{auto_follow}",
             "tab": "pins"
         }
     }, {
         "extraContent": {},
         "named": {
             "username": 0,
             "slug": 1
         },
         "resource": {
             "name": "BaseSearchResource",
             "options": {
                 "board_slug": "${slug}",
                 "scope": "my_pins",
                 "user": "${username}",
                 "query": "?{q}"
             }
         },
         "module": "SearchPage",
         "pathPattern": "^\/([^\/]+)\/([^\/]+)\/search\/$",
         "options": {
             "board_slug": "${slug}",
             "scope": "my_pins",
             "user": "${username}",
             "query": "?{q}"
         }
     }, {
         "extraContent": {
             "android_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "ios_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "require_explicit_login": true,
             "log": {
                 "view_type": 5
             },
             "canonical_url": "\/${username}\/${slug}\/"
         },
         "named": {
             "username": 0,
             "slug": 1
         },
         "resource": {
             "name": "BoardResource",
             "options": {
                 "username": "${username}",
                 "field_set_key": "detailed",
                 "slug": "${slug}"
             }
         },
         "module": "BoardPage",
         "pathPattern": "^\/([^\/]+)\/([^\/]+)\/edit\/$",
         "options": {
             "show_edit": true,
             "tab": "pins"
         }
     }, {
         "extraContent": {
             "ios_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "android_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "canonical_url": "\/${username}\/${slug}\/",
             "log": {
                 "view_type": 5
             }
         },
         "named": {
             "username": 0,
             "slug": 1
         },
         "resource": {
             "name": "BoardResource",
             "options": {
                 "username": "${username}",
                 "field_set_key": "detailed",
                 "slug": "${slug}"
             }
         },
         "module": "BoardPage",
         "pathPattern": "^\/([^\/]+)\/([^\/]+)\/pins\/$",
         "options": {
             "tab": "pins"
         }
     }, {
         "extraContent": {
             "noindex": true,
             "board_sub_page": "followers\/",
             "ios_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "android_deep_link": "pinterest:\/\/board\/${username}\/${slug}",
             "log": {
                 "view_parameter": 54,
                 "view_type": 5
             }
         },
         "named": {
             "username": 0,
             "slug": 1
         },
         "resource": {
             "name": "BoardResource",
             "options": {
                 "username": "${username}",
                 "field_set_key": "detailed",
                 "slug": "${slug}"
             }
         },
         "module": "BoardPage",
         "pathPattern": "^\/([^\/]+)\/([^\/]+)\/followers\/$",
         "options": {
             "tab": "followers"
         }
     }, {
         "extraContent": {
             "https": true
         },
         "named": {},
         "resource": {},
         "module": "TrademarkFormSelector",
         "pathPattern": "^\/about\/trademark\/form\/$",
         "options": {}
     }, {
         "extraContent": {
             "https": true
         },
         "named": {
             "claim_type": 0
         },
         "resource": {},
         "module": "TrademarkForm",
         "pathPattern": "^\/about\/trademark\/form\/([^\/]+)\/$",
         "options": {
             "claim_type": "${claim_type}"
         }
     }, {
         "extraContent": {
             "require_authentication": true
         },
         "named": {
             "domain": 0
         },
         "resource": {
             "name": "AnalyticsCountsResource",
             "options": {
                 "domain": "${domain}",
                 "start_date": "?{start_date}",
                 "end_date": "?{end_date}"
             }
         },
         "module": "DomainAnalyticsPage",
         "pathPattern": "^\/source\/([^\/]+)\/analytics\/$",
         "options": {
             "domain": "${domain}",
             "start_date": "?{start_date}",
             "end_date": "?{end_date}"
         }
     }, {
         "extraContent": {},
         "named": {},
         "resource": {
             "name": "UserResource",
             "options": {
                 "username": "me"
             }
         },
         "module": "VerifyWebsite",
         "pathPattern": "^\/verify_website\/$",
         "options": {
             "username": "me"
         }
     }, {
         "extraContent": {
             "sandbox": true
         },
         "named": {},
         "resource": {},
         "module": "Close",
         "pathPattern": "^\/close_window\/$",
         "options": {}
     }],
     "page_info": {
         "breadcrumbs": [],
         "meta": {
             "al:android:app_name": "Pinterest",
             "og:url": "http:\/\/www.pinterest.com",
             "twitter:app:url:iphone": "pinterest:\/\/",
             "twitter:app:url:ipad": "pinterest:\/\/",
             "al:ios:app_name": "Pinterest",
             "description": "Pinterest is a visual discovery tool that you can use to find ideas for all your projects and interests.",
             "al:ios:app_store_id": "429047995",
             "pinterest": "nohover",
             "al:android:package": "com.pinterest",
             "og:type": "website",
             "og:description": "Pinterest is a visual discovery tool that you can use to find ideas for all your projects and interests.",
             "twitter:app:android": "com.pinterest",
             "twitter:site": "@pinterest",
             "al:android:url": "pinterest:\/\/",
             "og:title": "Pinterest",
             "twitter:card": "summary",
             "twitter:app:id:ipad": "429047995",
             "twitter:app:url:googleplay": "pinterest:\/\/",
             "og:image": "http:\/\/passets-ec.pinterest.com\/images\/about\/logos\/Pinterest_Favicon.png",
             "twitter:app:id:iphone": "429047995",
             "al:ios:url": "pinterest:\/\/"
         },
         "title": "Pinterest"
     },
     "strings": {}
 });