(self.webpackChunk_kne_components_jsonschema_form=self.webpackChunk_kne_components_jsonschema_form||[]).push([[48],{69666:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(71830);r(72241);const i={name:"jsonschema-form",summary:"<p>\u8fd9\u91cc\u586b\u5199\u7ec4\u4ef6\u6982\u8981\u8bf4\u660e</p>",packageName:"@kne/jsonschema-form",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"jsonschema_form_c4f36",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const {default: JSONSchemaForm} = jsonSchemaForm;\nconst BaseExample = () => {\n    return <JSONSchemaForm onSubmit={(data) => {\n        console.log(data);\n    }} schema={{\n        "title": "\u4e2a\u4eba\u7b80\u5386",\n        "description": "\u4e2a\u4eba\u7b80\u5386",\n        "type": "object",\n        "required": ["name", "gender"],\n        "properties": {\n            "name": {\n                "type": "string", "title": "\u59d3\u540d", "default": "\u5f20\u4e09"\n            }, "gender": {\n                "type": "string", "title": "\u6027\u522b", "enum": ["\u7537", "\u5973"], default: "\u7537"\n            }, "age": {\n                "type": "integer", "title": "\u5e74\u9f84"\n            }, "isPLA": {\n                "type": "boolean", "title": "\u662f\u5426\u515a\u5458", default: true\n            }, "desc": {\n                "type": "string", "title": "\u4e2a\u4eba\u7b80\u4ecb", "minLength": 0, "maxLength": 500\n            }, "education": {\n                "type": "array", "title": "\u6559\u80b2\u7ecf\u5386", "items": {\n                    "type": "object", "required": ["schoolName"], "properties": {\n                        "schoolName": {\n                            "type": "string", "title": "\u5b66\u6821\u540d\u79f0"\n                        }, "type": {\n                            "type": "string", "title": "\u7c7b\u578b", "enum": ["\u7edf\u62db", "\u975e\u7edf\u62db"]\n                        }, "major": {\n                            "type": "string", "title": "\u4e13\u4e1a"\n                        }, "time": {\n                            "type": "object", "title": "\u65f6\u95f4", "properties": {\n                                "startTime": {\n                                    "type": "string", "title": "\u5f00\u59cb\u65f6\u95f4"\n                                }, "endTime": {\n                                    "type": "string", "title": "\u7ed3\u675f\u65f6\u95f4"\n                                }\n                            }\n                        }, "description": {\n                            "type": "string", "title": "\u7b80\u4ecb", "minLength": 0, "maxLength": 500\n                        }\n                    }\n                }\n            }, "language": {\n                "type": "array", "title": "\u8bed\u8a00", "items": {\n                    "type": "string"\n                }\n            }\n        }\n    }}/>;\n};\n\nrender(<BaseExample/>);\n\n',scope:[{name:"jsonSchemaForm",packageName:"@kne/jsonschema-form",component:n}]}]}}},11448:(e,t,r)=>{"use strict";r.r(t);var n=r(94922),i=r.n(n),s=r(87558),a=r(55199),o=r(89946),p=r.n(o),c=r(13050),_=r(89261);window.PUBLIC_URL="/jsonschema-form";const j={remote:"components-core",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.10"};(0,c.preset)({remotes:{default:j,"components-core":j,"components-iconfont":{remote:"components-iconfont",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.3"}}});const S=p().create({validateStatus:function(){return!0}});(0,s.preset)({ajax:S,loading:(0,_.jsx)(a.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,_.jsx)(a.Empty,{}),transformResponse:e=>{const{data:t}=e;return e.data={code:0===t.code?200:t.code,msg:t.msg,results:t.data},e}});var l=r(65457),y=r(94679),m=r(14152),u=r.n(m),E=(r(91296),r(46446));const g=u().ExampleRoutes,h=e=>{let{preset:t,themeToken:r,...n}=e;return(0,_.jsx)(y.HashRouter,{children:(0,_.jsx)(g,{...n,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:t,themeToken:r,readme:E.default,pageProps:{menu:null}})})};l.createRoot(document.getElementById("root")).render((0,_.jsx)(i().StrictMode,{children:(0,_.jsx)(h,{preset:{ajax:S},themeToken:{colorPrimary:"#4F185A"}})}))},71830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(94922),i=r.n(n),s=r(55199),a=r(87832),o=r.n(a),p=r(54159),c=r.n(p);r(23714);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var S="_LsbBm";const l=["className","title","extra","children"],y=e=>{let{className:t,children:r}=e;return i().createElement(s.Space,{className:t,direction:"vertical",size:0},r)};y.Part=e=>{let{className:t,title:r,extra:n,children:a}=e,o=j(e,l);return i().createElement(s.Card,_({className:c()(S,t,{"no-title":!r}),bordered:!1,title:r,extra:n},o),a)};var m="_USYpx",u="_TM-Fy",E="_u3-0A",g="_KdygK";const h=["column","gap","schema","rules","footer"],x=(e,t)=>{let{column:r,gap:n,labelHidden:o}=t;if("object"===e.type){const t=i().createElement(s.Row,{gutter:[n,0]},Object.keys(e.properties).map((t=>{const i=e.properties[t];return x(Object.assign({},i,{propertyRequired:(e.required||[]).indexOf(t)>-1,propertyName:[e.propertyName,t].filter((e=>!!e)).join(".")}),{column:r,gap:n})})));return i().createElement(s.Col,{key:e.propertyName||"root",span:24},e.propertyName?i().createElement(y.Part,{title:e.title},t):t)}if("array"===e.type)return i().createElement(s.Col,{key:e.propertyName||"root",span:24},i().createElement(d,{schema:e,column:r,gap:n}));const p=[e.propertyRequired?"REQ":"",e.pattern?"REG_EXP-".concat(e.pattern):"",e.hasOwnProperty("minLength")||e.hasOwnProperty("maxLength")?"LEN-".concat(e.minLength).concat(e.hasOwnProperty("maxLength")?"-".concat(e.maxLength):""):""].join(" ");return Array.isArray(e.enum)&&e.enum.length>0?i().createElement(s.Col,{key:e.propertyName,span:Math.round(24/r)},i().createElement(a.Select,{name:e.propertyName,label:e.title,rule:p,labelHidden:o,value:e.default,options:e.enum.map((t=>["integer","number","string"].indexOf(e.type)>-1?{label:t,value:t}:t))})):"string"===e.type&&e.maxLength>20?i().createElement(s.Col,{key:e.propertyName,span:24},i().createElement(a.TextArea,{name:e.propertyName,label:e.title,rule:p,labelHidden:o,value:e.default,maxLength:e.maxLength,showCount:!0,allowClear:!0,autoSize:{minRows:2}})):"string"===e.type?i().createElement(s.Col,{key:e.propertyName,span:Math.round(24/r)},i().createElement(a.Input,{name:e.propertyName,labelHidden:o,label:e.title,rule:p,value:e.default})):"boolean"===e.type?i().createElement(s.Col,{key:e.propertyName,span:Math.round(24/r)},i().createElement(a.Switch,{name:e.propertyName,labelHidden:o,label:e.title,rule:p,checked:e.default})):["integer","number"].indexOf(e.type)>-1?i().createElement(s.Col,{key:e.propertyName,span:Math.round(24/r)},i().createElement(a.InputNumber,{name:e.propertyName,labelHidden:o,label:e.title,rule:p,value:e.default})):null},d=e=>{let{schema:t,column:r,gap:o}=e;const p=(0,n.useRef)(null);return i().createElement(y.Part,{className:m,title:t.title,extra:i().createElement(s.Button,{type:"link",onClick:()=>{p.current.onAdd()}},"\u6dfb\u52a0")},i().createElement(a.GroupList,{ref:p,name:t.propertyName,defaultLength:1,empty:i().createElement(s.Empty,{description:""},i().createElement(s.Button,{type:"primary",onClick:()=>{p.current.onAdd()}},"\u6dfb\u52a0"))},((e,n)=>{let{index:a,onRemove:p}=n;var c;const _=-1===["array","object"].indexOf(null==t||null==(c=t.items)?void 0:c.type);return i().createElement("div",{key:e,className:u},i().createElement(y.Part,{className:E,title:"".concat(t.title," ").concat(a+1),extra:i().createElement(s.Button,{type:"link",danger:!0,onClick:p},"\u5220\u9664")},i().createElement(s.Row,{gutter:[o,0]},x(Object.assign({},t.items,_?{title:t.title,propertyName:t.propertyName}:{}),Object.assign({},{column:r,gap:o},_?{column:1,labelHidden:!0}:{})))))})))},P=e=>{let{column:t,gap:r,schema:p,rules:c,footer:S}=e,l=j(e,h);const m=(0,n.useMemo)((()=>x(p,{column:t,gap:r})),[p]);return i().createElement(o(),_({className:g},l,{rules:Object.assign({},c,{REG_EXP:(e,t)=>({result:new RegExp(t).test(e),msg:"%s\u4e0d\u7b26\u5408\u89c4\u5219"})})}),i().createElement(y,null,i().createElement(s.Row,{gutter:[r,0]},m),S||i().createElement(s.Row,{gutter:[r,0],justify:"center"},i().createElement(s.Col,null,i().createElement(a.SubmitButton,null,"\u4fdd\u5b58")),i().createElement(s.Col,null,i().createElement(a.ResetButton,null,"\u91cd\u7f6e")))))};P.defaultProps={column:2,gap:24,type:"inner"}},72241:()=>{},59318:(e,t,r)=>{var n={"./Binary_Property/ASCII.js":76397,"./Binary_Property/ASCII_Hex_Digit.js":4945,"./Binary_Property/Alphabetic.js":49259,"./Binary_Property/Any.js":44576,"./Binary_Property/Assigned.js":77448,"./Binary_Property/Bidi_Control.js":99208,"./Binary_Property/Bidi_Mirrored.js":46327,"./Binary_Property/Case_Ignorable.js":66092,"./Binary_Property/Cased.js":80746,"./Binary_Property/Changes_When_Casefolded.js":38767,"./Binary_Property/Changes_When_Casemapped.js":63558,"./Binary_Property/Changes_When_Lowercased.js":55210,"./Binary_Property/Changes_When_NFKC_Casefolded.js":82300,"./Binary_Property/Changes_When_Titlecased.js":94255,"./Binary_Property/Changes_When_Uppercased.js":32921,"./Binary_Property/Dash.js":33324,"./Binary_Property/Default_Ignorable_Code_Point.js":12886,"./Binary_Property/Deprecated.js":9781,"./Binary_Property/Diacritic.js":43064,"./Binary_Property/Emoji.js":35676,"./Binary_Property/Emoji_Component.js":60236,"./Binary_Property/Emoji_Modifier.js":54442,"./Binary_Property/Emoji_Modifier_Base.js":85132,"./Binary_Property/Emoji_Presentation.js":43463,"./Binary_Property/Extended_Pictographic.js":12367,"./Binary_Property/Extender.js":86111,"./Binary_Property/Grapheme_Base.js":65117,"./Binary_Property/Grapheme_Extend.js":1780,"./Binary_Property/Hex_Digit.js":50453,"./Binary_Property/IDS_Binary_Operator.js":42209,"./Binary_Property/IDS_Trinary_Operator.js":30493,"./Binary_Property/ID_Continue.js":15037,"./Binary_Property/ID_Start.js":16498,"./Binary_Property/Ideographic.js":54993,"./Binary_Property/Join_Control.js":63850,"./Binary_Property/Logical_Order_Exception.js":96712,"./Binary_Property/Lowercase.js":83323,"./Binary_Property/Math.js":50958,"./Binary_Property/Noncharacter_Code_Point.js":1653,"./Binary_Property/Pattern_Syntax.js":53604,"./Binary_Property/Pattern_White_Space.js":18483,"./Binary_Property/Quotation_Mark.js":47014,"./Binary_Property/Radical.js":1316,"./Binary_Property/Regional_Indicator.js":77639,"./Binary_Property/Sentence_Terminal.js":52168,"./Binary_Property/Soft_Dotted.js":1103,"./Binary_Property/Terminal_Punctuation.js":9535,"./Binary_Property/Unified_Ideograph.js":37284,"./Binary_Property/Uppercase.js":14498,"./Binary_Property/Variation_Selector.js":2715,"./Binary_Property/White_Space.js":50730,"./Binary_Property/XID_Continue.js":63735,"./Binary_Property/XID_Start.js":86984,"./General_Category/Cased_Letter.js":36601,"./General_Category/Close_Punctuation.js":19297,"./General_Category/Connector_Punctuation.js":67674,"./General_Category/Control.js":60371,"./General_Category/Currency_Symbol.js":91786,"./General_Category/Dash_Punctuation.js":36095,"./General_Category/Decimal_Number.js":76121,"./General_Category/Enclosing_Mark.js":87830,"./General_Category/Final_Punctuation.js":43473,"./General_Category/Format.js":27963,"./General_Category/Initial_Punctuation.js":13881,"./General_Category/Letter.js":71300,"./General_Category/Letter_Number.js":43506,"./General_Category/Line_Separator.js":43254,"./General_Category/Lowercase_Letter.js":60658,"./General_Category/Mark.js":64721,"./General_Category/Math_Symbol.js":93009,"./General_Category/Modifier_Letter.js":10032,"./General_Category/Modifier_Symbol.js":47876,"./General_Category/Nonspacing_Mark.js":29410,"./General_Category/Number.js":44877,"./General_Category/Open_Punctuation.js":76479,"./General_Category/Other.js":37508,"./General_Category/Other_Letter.js":49151,"./General_Category/Other_Number.js":36978,"./General_Category/Other_Punctuation.js":23287,"./General_Category/Other_Symbol.js":38987,"./General_Category/Paragraph_Separator.js":2220,"./General_Category/Private_Use.js":84501,"./General_Category/Punctuation.js":77426,"./General_Category/Separator.js":9505,"./General_Category/Space_Separator.js":17020,"./General_Category/Spacing_Mark.js":48503,"./General_Category/Surrogate.js":63772,"./General_Category/Symbol.js":64696,"./General_Category/Titlecase_Letter.js":98335,"./General_Category/Unassigned.js":38267,"./General_Category/Uppercase_Letter.js":55937,"./Property_of_Strings/Basic_Emoji.js":18406,"./Property_of_Strings/Emoji_Keycap_Sequence.js":92311,"./Property_of_Strings/RGI_Emoji.js":14962,"./Property_of_Strings/RGI_Emoji_Flag_Sequence.js":635,"./Property_of_Strings/RGI_Emoji_Modifier_Sequence.js":79038,"./Property_of_Strings/RGI_Emoji_Tag_Sequence.js":64577,"./Property_of_Strings/RGI_Emoji_ZWJ_Sequence.js":24372,"./Script/Adlam.js":16545,"./Script/Ahom.js":6107,"./Script/Anatolian_Hieroglyphs.js":52678,"./Script/Arabic.js":84090,"./Script/Armenian.js":81325,"./Script/Avestan.js":99466,"./Script/Balinese.js":8361,"./Script/Bamum.js":77542,"./Script/Bassa_Vah.js":78214,"./Script/Batak.js":15687,"./Script/Bengali.js":66690,"./Script/Bhaiksuki.js":37765,"./Script/Bopomofo.js":72783,"./Script/Brahmi.js":55305,"./Script/Braille.js":74641,"./Script/Buginese.js":58210,"./Script/Buhid.js":68198,"./Script/Canadian_Aboriginal.js":97034,"./Script/Carian.js":13724,"./Script/Caucasian_Albanian.js":5493,"./Script/Chakma.js":56603,"./Script/Cham.js":42191,"./Script/Cherokee.js":91606,"./Script/Chorasmian.js":81273,"./Script/Common.js":95883,"./Script/Coptic.js":37196,"./Script/Cuneiform.js":40886,"./Script/Cypriot.js":93302,"./Script/Cypro_Minoan.js":99624,"./Script/Cyrillic.js":77671,"./Script/Deseret.js":57794,"./Script/Devanagari.js":40756,"./Script/Dives_Akuru.js":65590,"./Script/Dogra.js":12135,"./Script/Duployan.js":84658,"./Script/Egyptian_Hieroglyphs.js":36582,"./Script/Elbasan.js":90138,"./Script/Elymaic.js":61062,"./Script/Ethiopic.js":48551,"./Script/Georgian.js":36712,"./Script/Glagolitic.js":69751,"./Script/Gothic.js":27e3,"./Script/Grantha.js":94117,"./Script/Greek.js":16336,"./Script/Gujarati.js":66785,"./Script/Gunjala_Gondi.js":1056,"./Script/Gurmukhi.js":20360,"./Script/Han.js":76579,"./Script/Hangul.js":48015,"./Script/Hanifi_Rohingya.js":63621,"./Script/Hanunoo.js":76094,"./Script/Hatran.js":64140,"./Script/Hebrew.js":329,"./Script/Hiragana.js":55065,"./Script/Imperial_Aramaic.js":90772,"./Script/Inherited.js":89042,"./Script/Inscriptional_Pahlavi.js":97791,"./Script/Inscriptional_Parthian.js":76475,"./Script/Javanese.js":2015,"./Script/Kaithi.js":55700,"./Script/Kannada.js":82484,"./Script/Katakana.js":3048,"./Script/Kawi.js":70912,"./Script/Kayah_Li.js":4426,"./Script/Kharoshthi.js":88199,"./Script/Khitan_Small_Script.js":37241,"./Script/Khmer.js":84877,"./Script/Khojki.js":45704,"./Script/Khudawadi.js":94962,"./Script/Lao.js":728,"./Script/Latin.js":58882,"./Script/Lepcha.js":32531,"./Script/Limbu.js":18979,"./Script/Linear_A.js":90771,"./Script/Linear_B.js":13654,"./Script/Lisu.js":35857,"./Script/Lycian.js":61022,"./Script/Lydian.js":17289,"./Script/Mahajani.js":37791,"./Script/Makasar.js":29168,"./Script/Malayalam.js":11187,"./Script/Mandaic.js":21487,"./Script/Manichaean.js":97163,"./Script/Marchen.js":30528,"./Script/Masaram_Gondi.js":24474,"./Script/Medefaidrin.js":77018,"./Script/Meetei_Mayek.js":89777,"./Script/Mende_Kikakui.js":35819,"./Script/Meroitic_Cursive.js":3306,"./Script/Meroitic_Hieroglyphs.js":50515,"./Script/Miao.js":94520,"./Script/Modi.js":61753,"./Script/Mongolian.js":73556,"./Script/Mro.js":53144,"./Script/Multani.js":3252,"./Script/Myanmar.js":48287,"./Script/Nabataean.js":52949,"./Script/Nag_Mundari.js":36473,"./Script/Nandinagari.js":87318,"./Script/New_Tai_Lue.js":38502,"./Script/Newa.js":39855,"./Script/Nko.js":33384,"./Script/Nushu.js":25201,"./Script/Nyiakeng_Puachue_Hmong.js":6698,"./Script/Ogham.js":16852,"./Script/Ol_Chiki.js":1984,"./Script/Old_Hungarian.js":3899,"./Script/Old_Italic.js":65412,"./Script/Old_North_Arabian.js":23410,"./Script/Old_Permic.js":69710,"./Script/Old_Persian.js":71514,"./Script/Old_Sogdian.js":88633,"./Script/Old_South_Arabian.js":66872,"./Script/Old_Turkic.js":55280,"./Script/Old_Uyghur.js":24538,"./Script/Oriya.js":11714,"./Script/Osage.js":71393,"./Script/Osmanya.js":73792,"./Script/Pahawh_Hmong.js":17021,"./Script/Palmyrene.js":63043,"./Script/Pau_Cin_Hau.js":17106,"./Script/Phags_Pa.js":35079,"./Script/Phoenician.js":96920,"./Script/Psalter_Pahlavi.js":97707,"./Script/Rejang.js":48829,"./Script/Runic.js":65273,"./Script/Samaritan.js":94526,"./Script/Saurashtra.js":94640,"./Script/Sharada.js":72800,"./Script/Shavian.js":48892,"./Script/Siddham.js":13530,"./Script/SignWriting.js":3403,"./Script/Sinhala.js":57042,"./Script/Sogdian.js":82883,"./Script/Sora_Sompeng.js":94007,"./Script/Soyombo.js":48674,"./Script/Sundanese.js":48660,"./Script/Syloti_Nagri.js":99056,"./Script/Syriac.js":3015,"./Script/Tagalog.js":14843,"./Script/Tagbanwa.js":18451,"./Script/Tai_Le.js":6226,"./Script/Tai_Tham.js":96947,"./Script/Tai_Viet.js":10397,"./Script/Takri.js":44445,"./Script/Tamil.js":56699,"./Script/Tangsa.js":84042,"./Script/Tangut.js":93627,"./Script/Telugu.js":76386,"./Script/Thaana.js":32589,"./Script/Thai.js":90096,"./Script/Tibetan.js":20561,"./Script/Tifinagh.js":96638,"./Script/Tirhuta.js":85275,"./Script/Toto.js":81750,"./Script/Ugaritic.js":10144,"./Script/Vai.js":24800,"./Script/Vithkuqi.js":75513,"./Script/Wancho.js":58108,"./Script/Warang_Citi.js":31848,"./Script/Yezidi.js":68854,"./Script/Yi.js":95260,"./Script/Zanabazar_Square.js":31522,"./Script_Extensions/Adlam.js":34142,"./Script_Extensions/Ahom.js":37394,"./Script_Extensions/Anatolian_Hieroglyphs.js":77049,"./Script_Extensions/Arabic.js":22167,"./Script_Extensions/Armenian.js":93760,"./Script_Extensions/Avestan.js":31889,"./Script_Extensions/Balinese.js":84380,"./Script_Extensions/Bamum.js":93605,"./Script_Extensions/Bassa_Vah.js":55861,"./Script_Extensions/Batak.js":10272,"./Script_Extensions/Bengali.js":17709,"./Script_Extensions/Bhaiksuki.js":94674,"./Script_Extensions/Bopomofo.js":94226,"./Script_Extensions/Brahmi.js":10940,"./Script_Extensions/Braille.js":69786,"./Script_Extensions/Buginese.js":68295,"./Script_Extensions/Buhid.js":49781,"./Script_Extensions/Canadian_Aboriginal.js":21505,"./Script_Extensions/Carian.js":13373,"./Script_Extensions/Caucasian_Albanian.js":78140,"./Script_Extensions/Chakma.js":99018,"./Script_Extensions/Cham.js":41782,"./Script_Extensions/Cherokee.js":34715,"./Script_Extensions/Chorasmian.js":55024,"./Script_Extensions/Common.js":89278,"./Script_Extensions/Coptic.js":57897,"./Script_Extensions/Cuneiform.js":29045,"./Script_Extensions/Cypriot.js":87613,"./Script_Extensions/Cypro_Minoan.js":38549,"./Script_Extensions/Cyrillic.js":49066,"./Script_Extensions/Deseret.js":89605,"./Script_Extensions/Devanagari.js":56349,"./Script_Extensions/Dives_Akuru.js":20865,"./Script_Extensions/Dogra.js":6748,"./Script_Extensions/Duployan.js":8355,"./Script_Extensions/Egyptian_Hieroglyphs.js":91711,"./Script_Extensions/Elbasan.js":40193,"./Script_Extensions/Elymaic.js":72797,"./Script_Extensions/Ethiopic.js":17718,"./Script_Extensions/Georgian.js":27069,"./Script_Extensions/Glagolitic.js":26618,"./Script_Extensions/Gothic.js":99917,"./Script_Extensions/Grantha.js":49334,"./Script_Extensions/Greek.js":1535,"./Script_Extensions/Gujarati.js":29100,"./Script_Extensions/Gunjala_Gondi.js":3967,"./Script_Extensions/Gurmukhi.js":90761,"./Script_Extensions/Han.js":21240,"./Script_Extensions/Hangul.js":79142,"./Script_Extensions/Hanifi_Rohingya.js":20710,"./Script_Extensions/Hanunoo.js":29069,"./Script_Extensions/Hatran.js":78309,"./Script_Extensions/Hebrew.js":49908,"./Script_Extensions/Hiragana.js":84012,"./Script_Extensions/Imperial_Aramaic.js":20993,"./Script_Extensions/Inherited.js":34105,"./Script_Extensions/Inscriptional_Pahlavi.js":34412,"./Script_Extensions/Inscriptional_Parthian.js":8390,"./Script_Extensions/Javanese.js":99530,"./Script_Extensions/Kaithi.js":76801,"./Script_Extensions/Kannada.js":52803,"./Script_Extensions/Katakana.js":66029,"./Script_Extensions/Kawi.js":10841,"./Script_Extensions/Kayah_Li.js":85923,"./Script_Extensions/Kharoshthi.js":15018,"./Script_Extensions/Khitan_Small_Script.js":99070,"./Script_Extensions/Khmer.js":39138,"./Script_Extensions/Khojki.js":27325,"./Script_Extensions/Khudawadi.js":30025,"./Script_Extensions/Lao.js":80555,"./Script_Extensions/Latin.js":73057,"./Script_Extensions/Lepcha.js":39214,"./Script_Extensions/Limbu.js":67780,"./Script_Extensions/Linear_A.js":64414,"./Script_Extensions/Linear_B.js":49563,"./Script_Extensions/Lisu.js":55420,"./Script_Extensions/Lycian.js":48879,"./Script_Extensions/Lydian.js":71200,"./Script_Extensions/Mahajani.js":70122,"./Script_Extensions/Makasar.js":8715,"./Script_Extensions/Malayalam.js":17828,"./Script_Extensions/Mandaic.js":22208,"./Script_Extensions/Manichaean.js":92022,"./Script_Extensions/Marchen.js":60631,"./Script_Extensions/Masaram_Gondi.js":32453,"./Script_Extensions/Medefaidrin.js":43246,"./Script_Extensions/Meetei_Mayek.js":51316,"./Script_Extensions/Mende_Kikakui.js":33516,"./Script_Extensions/Meroitic_Cursive.js":65263,"./Script_Extensions/Meroitic_Hieroglyphs.js":49870,"./Script_Extensions/Miao.js":10393,"./Script_Extensions/Modi.js":43680,"./Script_Extensions/Mongolian.js":12727,"./Script_Extensions/Mro.js":28139,"./Script_Extensions/Multani.js":85067,"./Script_Extensions/Myanmar.js":44756,"./Script_Extensions/Nabataean.js":69902,"./Script_Extensions/Nag_Mundari.js":34493,"./Script_Extensions/Nandinagari.js":65465,"./Script_Extensions/New_Tai_Lue.js":36225,"./Script_Extensions/Newa.js":11354,"./Script_Extensions/Nko.js":32775,"./Script_Extensions/Nushu.js":9406,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":3491,"./Script_Extensions/Ogham.js":89471,"./Script_Extensions/Ol_Chiki.js":46309,"./Script_Extensions/Old_Hungarian.js":91176,"./Script_Extensions/Old_Italic.js":50769,"./Script_Extensions/Old_North_Arabian.js":56997,"./Script_Extensions/Old_Permic.js":10259,"./Script_Extensions/Old_Persian.js":31601,"./Script_Extensions/Old_Sogdian.js":99702,"./Script_Extensions/Old_South_Arabian.js":50907,"./Script_Extensions/Old_Turkic.js":5737,"./Script_Extensions/Old_Uyghur.js":57575,"./Script_Extensions/Oriya.js":81577,"./Script_Extensions/Osage.js":35218,"./Script_Extensions/Osmanya.js":81111,"./Script_Extensions/Pahawh_Hmong.js":44648,"./Script_Extensions/Palmyrene.js":33980,"./Script_Extensions/Pau_Cin_Hau.js":68837,"./Script_Extensions/Phags_Pa.js":23702,"./Script_Extensions/Phoenician.js":91357,"./Script_Extensions/Psalter_Pahlavi.js":35592,"./Script_Extensions/Rejang.js":58872,"./Script_Extensions/Runic.js":39170,"./Script_Extensions/Samaritan.js":51965,"./Script_Extensions/Saurashtra.js":95369,"./Script_Extensions/Sharada.js":96883,"./Script_Extensions/Shavian.js":98571,"./Script_Extensions/Siddham.js":95065,"./Script_Extensions/SignWriting.js":27028,"./Script_Extensions/Sinhala.js":88917,"./Script_Extensions/Sogdian.js":52840,"./Script_Extensions/Sora_Sompeng.js":5750,"./Script_Extensions/Soyombo.js":23333,"./Script_Extensions/Sundanese.js":94171,"./Script_Extensions/Syloti_Nagri.js":76973,"./Script_Extensions/Syriac.js":24994,"./Script_Extensions/Tagalog.js":48084,"./Script_Extensions/Tagbanwa.js":55342,"./Script_Extensions/Tai_Le.js":19527,"./Script_Extensions/Tai_Tham.js":88526,"./Script_Extensions/Tai_Viet.js":83856,"./Script_Extensions/Takri.js":58294,"./Script_Extensions/Tamil.js":70556,"./Script_Extensions/Tangsa.js":36879,"./Script_Extensions/Tangut.js":80034,"./Script_Extensions/Telugu.js":10539,"./Script_Extensions/Thaana.js":21016,"./Script_Extensions/Thai.js":66361,"./Script_Extensions/Tibetan.js":79574,"./Script_Extensions/Tifinagh.js":49287,"./Script_Extensions/Tirhuta.js":56488,"./Script_Extensions/Toto.js":9683,"./Script_Extensions/Ugaritic.js":15385,"./Script_Extensions/Vai.js":43467,"./Script_Extensions/Vithkuqi.js":37152,"./Script_Extensions/Wancho.js":32437,"./Script_Extensions/Warang_Citi.js":46223,"./Script_Extensions/Yezidi.js":67055,"./Script_Extensions/Yi.js":56813,"./Script_Extensions/Zanabazar_Square.js":53347,"./index.js":69190,"./unicode-version.js":22516};function i(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=59318}}]);
//# sourceMappingURL=48.b5c8ed9c.chunk.js.map