import {
    createElement,
    virtualDom,
    mount,
    styleComponent,
    setStyle,
    sydDOM,
    getState,
    preState,
    useState
} from './sydneyLib/sydneyDom.js'


sydDOM.profileBody = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.mainBodyContent() + styleComponent.flexType([
                {method:'add',style:{flexDirection:'column',rowGap:"20px",alignItems:'flex-start',border:'none'}}
            ])+'width:100vw;min-height:fit-content;min-width:100vw;'
        },
        [
            sydDOM.navChoice(),
            sydDOM.bodyHeader(),
            sydDOM.pic_init_show({headerText:'the CEO',textcontent:`is a global Business giant and also The CEO of The:
Assurance Technology and Automation Enterprises, ( importation of solar power system products )
Aachideraa Logistics services, ( clearing and forwarding and shipping on international scale )
Eka Chukwu waters ( water treatment plant)
Mainjor Shareholder of 
NBARuo NaNBA Export Company LTD ( exportation of solid minerals e.g iron ore, lead ore concentrate, copper ore, Aluminum bunxile, Aluminum ore, lithium ore, etc ).
These companies have office and outlet in Nigeria and China`,nameSpec:'ceo'}),
            createElement('p',{style:styleComponent.titleText({method:'add',style:{textAlign:'center',width:'100%',textDecoration:'underline',fontWeight:'700',padding:'5px'}})},['Our Services']),
            sydDOM.initShow({headerText:'assurance technology and automation enterprise',textcontent:`At Assurance Technology and Automation Enterprise, we’re dedicated to powering a sustainable future and delivering top-quality mineral resources. Our mission is to provide you with the best in solar-related accessories and solid minerals, combining innovation with reliability to meet all your needs.`}),
            sydDOM.initShow_rev({headerText:'Explore Our Solar Solutions',textcontent:`Harness the power of the sun with our extensive range of solar products. From high-performance solar panels and efficient batteries to advanced charging systems, we offer cutting-edge solutions designed to help you reduce your carbon footprint and achieve energy independence. Whether you’re a homeowner looking to cut energy costs or a business aiming to enhance sustainability, we’ve got the products and expertise to support your goals.`,imgUrl:''}),
            sydDOM.initShow({headerText:'Discover Our Solid Minerals',textcontent:`Our solid minerals are sourced with care and commitment to quality. We offer a diverse selection, from essential industrial minerals to rare and valuable gems. Each product is chosen to meet rigorous standards, ensuring you receive the best in both performance and purity.`,nameSpec:'imgExpand3'}),
            createElement('p',{style:styleComponent.titleText({method:'add',style:{textAlign:'center',width:'100%',textDecoration:'underline',fontWeight:'700',padding:'5px'}})},['products']),
            createElement(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    createElement('strong',{style:'text-transform:capitalize;color:#1097f3;text-decoration:underline'},['solar options']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Solar Panel']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Inverter ']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Hybrid Inverter']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Lithium Battery']),
                ]
            ),
            createElement(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    createElement('strong',{style:'text-transform:capitalize;color:#1097f3;text-decoration:underline'},['Solid Minerals']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Copper']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Lead']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Lithium']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Zinc']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Florite']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Mica']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Monoxite']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Tin']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Iron Ore']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Coal']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Clay']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Columbite']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Feldspar']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Granite']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Illeminite']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Koaline']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Pyrite']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Aluminum']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px;color:#15cbfc'},['Zircon Sand']),


                ]
            ),
        ]
    )
}

sydDOM.pic_init_show = ({headerText,textcontent,nameSpec = ''}) =>{
    return createElement(
        'div',
        {
            style:'height:fit-content;width:100%;display:flex;column-gap:5px;row-gap:15px;padding:10px;flex-wrap:wrap;justify-content:space-between;align-items:center;'
        },
        [
            createElement('div',{style:'height:fit-content;display:flex;flex-direction:column;row-gap:15px;min-width:300px;',class:"expandText_pic"},[
                createElement(
                    'h2',
                    {
                        style:'font-weight:700;text-transform:capitalize;color:#15cbfc;'
                    },
                    [
                        headerText
                    ]
                ),
                createElement(
                    'p',
                    {
                        style:'color:#15cbfc',
                        class:'ceo_name'
                    },
                    [
                        createElement('strong',{style:'color:inherit'},['Azubuike Chideraa Augustine ']),
                        textcontent
                    ]
                )
            ]),
            createElement(
                'div',
                {
                    style:`height:400px;min-width:250px;transition:none;background-color:unset;` + styleComponent.bg({method:'add',style:{backgroundSize:'contain',backgroundImage:`url(assets/${nameSpec}.jpeg)`}}),
                    class:"expandImg_pic"
                }
            )
        ]
    )
}

sydDOM.initShow = ({headerText,textcontent,nameSpec = 'imgExpand1'}) =>{
    return createElement(
        'div',
        {
            style:'height:fit-content;width:100%;display:flex;column-gap:5px;row-gap:15px;padding:10px;flex-wrap:wrap;justify-content:space-around;align-items:center;'
        },
        [
            createElement('div',{style:'height:fit-content;display:flex;flex-direction:column;row-gap:15px;min-width:300px;',class:"expandText"},[
                createElement(
                    'h2',
                    {
                        style:'font-weight:700;text-transform:capitalize;color:#fff;'
                    },
                    [
                        headerText
                    ]
                ),
                createElement(
                    'p',
                    {
                        style:'color:#fff'
                    },
                    [
                        textcontent
                    ]
                )
            ]),
            createElement(
                'div',
                {
                    style:`height:400px;min-width:250px;transition:none;background-color:unset;animation-name:${nameSpec};` + styleComponent.bg({method:'add',style:{backgroundSize:'contain'}}),
                    class:"expandImg thinBorder"
                }
            )
        ]
    )
}

sydDOM.initShow_rev = ({headerText,textcontent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste nobis, qui ipsa dolor voluptates, sapiente at commodi velit a dicta iure mollitia veniam facere saepe incidunt illum repellendus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo in facere nihil beatae perferendis, voluptate illo veritatis sint fugiat provident error obcaecati consequuntur et voluptatem nulla nobis possimus autem animi.',imgUrl}) =>{
    return createElement(
        'div',
        {
            style:'height:fit-content;width:100%;display:flex;flex-direction:row-reverse;column-gap:5px;row-gap:20px;padding:10px;flex-wrap:wrap;justify-content:space-around;align-items:center;'
        },
        [
            createElement('div',{style:'height:fit-content;display:flex;flex-direction:column;row-gap:15px;min-width:300px',class:"expandText"},[
                createElement(
                    'h2',
                    {
                        style:'font-weight:700;text-transform:capitalize;color:#fff'
                    },
                    [
                        headerText
                    ]
                ),
                createElement(
                    'p',
                    {
                        style:'color:#fff'
                    },
                    [
                        textcontent
                    ]
                )
            ]),
            createElement(
                'div',
                {
                    style:'height:400px;min-width:250px;background-color:unset;animation-name:imgExpand2;animation-duration:50s;' + styleComponent.bg(),
                    class:"expandImg"
                }
            )
        ]
    )
}
