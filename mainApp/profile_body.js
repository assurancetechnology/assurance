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
            sydDOM.initShow({headerText:'assurance technology and automation enterprise',textcontent:`At Assurance Technology and Automation Enterprise, we’re dedicated to powering a sustainable future and delivering top-quality mineral resources. Our mission is to provide you with the best in solar-related accessories and solid minerals, combining innovation with reliability to meet all your needs.`}),
            sydDOM.initShow_rev({headerText:'Explore Our Solar Solutions',textcontent:`Harness the power of the sun with our extensive range of solar products. From high-performance solar panels and efficient batteries to advanced charging systems, we offer cutting-edge solutions designed to help you reduce your carbon footprint and achieve energy independence. Whether you’re a homeowner looking to cut energy costs or a business aiming to enhance sustainability, we’ve got the products and expertise to support your goals.`,imgUrl:''}),
            sydDOM.initShow({headerText:'Discover Our Solid Minerals',textcontent:`Our solid minerals are sourced with care and commitment to quality. We offer a diverse selection, from essential industrial minerals to rare and valuable gems. Each product is chosen to meet rigorous standards, ensuring you receive the best in both performance and purity.`,nameSpec:'imgExpand3'}),
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