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
} from '../sydneyLib/sydneyDom.js'

import './bodySubNav.js';
import './bodySideNav.js';
import './mainDisplayPanel.js'

setStyle([
    {
        nameTag:'mainBodyContent',
        style:{
            // minHeight:'100%',
            width:'100%',
            background:'inherit',
            rowGap:'20px',
            paddingBottom:'80px',
            position:'relative',
            height:'fit-content',
            // background:'green'
        }
    },
    {
        nameTag:'titleText',
        style:{
            fontSize:'25px',
            fontWeight:'700',
            textTransform:'capitalize',
            padding:'5px',
            color:'#1097f3'
        }
    },
    {
        nameTag:'floatBodyContent_',
        style:{
            height:'100%',
            width:'100%',
            // background:'#fff',
            padding:'15px',
            overflow:'scroll',
            paddingBottom:'100px',
            // display:'flex'
        }
    },
    {
        nameTag:'menuList',
        style:{
            lineHeight:'60px',
            borderBottom:'1px solid #333',
            width:'100%',
            textAlign:'left',
            textTransform:'capitalize',
            paddingLeft:'5px',
            fontSize:'20px',
            fontWeight:'500',
            // outline:'none'
        }
    }
])

sydDOM.mainBodyContent = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.mainBodyContent() + styleComponent.flexType([
                {method:'add',style:{flexDirection:'column',alignItems:'flex-start',border:'none'}}
            ]),
            class:'direct-child'
        },
        [
            sydDOM.navChoice(),
            sydDOM.bodyHeader(),
            sydDOM.largeImageDisplay(),
            sydDOM.bodySubNav(),
            sydDOM.mainDisplayPanel()
        ]
    )
}

sydDOM.navChoice = () =>{
    return createElement(
        'div',
        {
            style:'background:#fff;width:100%;column-gap:10px;margin-top:20px;text-transform:capitalize;color:#15cbfc;' + styleComponent.flexType()
        },
        [
            createElement('p',{style:'color:inherit'},['Home']),
            createElement('i',{style:'font-size:12px',class:"fa-solid fa-angles-right"},[]),
            sydDOM.currentNavChoice()
        ]
    )
}

sydDOM.currentNavChoice = () =>{
    return createElement(
        'p',
        {style:'color:inherit'},
        [
            preState(['currentNavChoice','text'],category)
        ],
        {
            createState:{
                stateName:'currentNavChoice',
                state:{text:'test'}
            },
            type:'currentNavChoice'
        }
    )
}

sydDOM.bodyHeader = () =>{
    return createElement(
        'p',
        {
            style:styleComponent.titleText()
        },
        [
            preState(['bodyHeader','text'],`${category}`),createElement('i',{style:'margin-left:15px',class:"fa-solid fa-laptop"})
        ],
        {
            createState:{
                stateName:'bodyHeader',
                state:{text:'hp laptops'}
            },
            type:'bodyHeader'
        }
    )
}

sydDOM.largeImageDisplay = () =>{
    togBodySideNav = () =>{
        const bodySideNav = getState('bodySideNav');
        const container = getState('container');
        bodySideNav.d = 'flex';
        // container.ov = 'hidden'
        useState('bodySideNav',{type:'a',value:bodySideNav});
        useState('container', {type:'a',value:container})
        virtualDom['bodySideNav_child'].focus()
    }
    playVideo = () =>{
        virtualDom['largeVideo'].play();

        virtualDom['large_video_top'].style.display = 'none';
    }

    moveVideoSrc = (type) =>{
        virtualDom['largeVideo'].pause();

        virtualDom['large_video_top'].style.display = 'flex';
        const largeImageDisplay = getState('largeImageDisplay');
        switch(type)
        {
            case '+':
                largeImageDisplay.index++
                if(largeImageDisplay.index > 3)
                {
                    largeImageDisplay.index = 1;
                }
            break;
            default:
                largeImageDisplay.index--;
                if(largeImageDisplay.index < 1)
                    {
                        largeImageDisplay.index = 3
                    }
        }
        useState('largeImageDisplay',{type:'a',value:largeImageDisplay})
    }
    return createElement(
        'div',//linear-gradient(to right bottom, #1097f3,#15cbfc)
        {
            style:'width:100%;height:80%;max-height:400px;min-height:400px;position:relative;background:#000;' + styleComponent.flexType({method:'add',style:{justifyContent:'center'}})
        },
        [
            // createElement(
            //     'p',
            //     {
            //         style:'font-weight:300;padding:10px 5px;cursor:pointer;width:fit-content;position:absolute;bottom:20px;right:20px;color:#fff',
            //         // onclick:'togBodySideNav()'
            //     },
            //     [
            //         'show filters'
            //     ]
            // )
            createElement(
                'div',
                {
                    style:'height:100%;width:100%;position:absolute;z-index:100;top:0;left:0;background-color:inherit;display:flex;justify-content:center;align-items:center;'+styleComponent.bg({method:'add',style:{backgroundImage:`url(assets/ov${preState(['largeImageDisplay','index'],'1')}.jpg)`}})
                },
                [
                    createElement('span',{style:'height:100px;width:100px;'+styleComponent.bg({method:'add',style:{backgroundImage:'url(assets/playBtn.png)'}}),class:'click',onclick:"playVideo()"})
                ],
                {
                    type:'large_video_top'
                }
            ),
            createElement(
                'div',
                {
                    style:'height:50px;width:50px;border-radius:50%;position:absolute;z-index:105;top:50%;left:10px;right:10px;transform:translateY(-50%);background:#15cbfc;'+styleComponent.bg({method:'add',style:{backgroundImage:'url(assets/a-.png)',backgroundSize:'70%'}}),
                    class:'click',
                    onclick:'moveVideoSrc("-")'
                },
                [

                ]
            ),
            createElement(
                'div',
                {
                    style:'height:50px;width:50px;border-radius:50%;position:absolute;z-index:105;top:50%;right:10px;right:10px;transform:translateY(-50%);background:#15cbfc;'+styleComponent.bg({method:'add',style:{backgroundImage:'url(assets/a+.png)',backgroundSize:'70%'}}),
                    class:'click',
                    onclick:'moveVideoSrc("+")'
                },
                [

                ]
            ),
            createElement(
                'video',
                {
                    style:'width:100%;max-width:600px;max-height:100%',
                    controls:true,
                    src:`assets/vid${preState(['largeImageDisplay','index'],'1')}.mp4`
                },
                [
                    
                ],
                {
                    type:'largeVideo'
                }
            )
        ],
        {
            type:'largeImageDisplay',
            createState:{
                stateName:"largeImageDisplay",
                state:{index:1}
            }
        }
    )
}

sydDOM.floatBodyContent = () =>{
    togFloatBody = (type) =>{
        const floatBodyContent = getState('floatBodyContent');
        const container = getState('container');

        switch(true)
        {
            case floatBodyContent.controller !== type:

                container.ov = 'hidden';
                floatBodyContent.d = 'flex';
                floatBodyContent.controller = type;
                const timer = setTimeout(() => {
                    const floatBodyContent = getState('floatBodyContent');
                    floatBodyContent.o = '1';
                    useState('floatBodyContent',{type:'a',value:floatBodyContent})
                    clearTimeout(timer)
                }, 100);

            break;
            default:

                floatBodyContent.d = 'none';
                floatBodyContent.o = '0';
                floatBodyContent.controller = '';
                container.ov = 'scroll';

        }
        useState('floatBodyContent',{type:'a',value:floatBodyContent});
        useState('container', {type:'a',value:container})
    }

    // const selectRenderedElement = () =>{
        
    // }
    return createElement(
        'div',
        {
            style:`width:100%;display:${preState(['floatBodyContent','d'],'none')};opacity:${preState(['floatBodyContent','o'],'1')};left:50%;background:#fff;position:absolute;top:100%;transform:translateX(-50%);z-index:1100`,
            class:'floatBodyContent'
        },
        [
            sydDOM.floatBodyContent_Msearch(),
            // sydDOM.floatBodyContent_cart1(),
            sydDOM.floatBodyContent_Mmenu()
        ],
        {
            createState:{
                stateName:'floatBodyContent',
                state:{d:'none',o:'0',controller:'',processRender:(type) =>{
                    const controller = preState(['floatBodyContent','controller'],'');
                    return controller === type;
                }}
            },
            type:'floatBodyContent'
        }
    )
}

sydDOM.floatBodyContent_Mmenu = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.floatBodyContent_({
                method:'add',
                style:{
                    // background:'red',
                    display:preState(['floatBodyContent','processRender'],()=>{return false})('Mmenu') === true ? 'flex' : 'none',
                    flexDirection:'column'
                }
            })
        },
        [
            createElement(
                'ul',
                {
                    style:'list-style-type:none;display:flex;flex-direction:column'//#1097f3
                },
                [
                    createElement('a',{style:styleComponent.menuList(),class:'click',href:'profile.html'},['Profile']),
                    createElement('a',{style:styleComponent.menuList(),class:'click',href:`index.html`},['Products']),
                    createElement('a',{style:styleComponent.menuList(),class:'click',href:'contact.html'},['Contact']),
                    // createElement('a',{style:styleComponent.menuList(),class:'click',onclick:'loadDecForm("apple")'},['apple']),
                    // createElement('a',{style:styleComponent.menuList(),class:'click',onclick:'loadDecForm("lenovo")'},['lenovo']),
                ]
            )
        ]
    )
}

sydDOM.floatBodyContent_cart1 = () =>{
    const renderElem = () =>{
        const data = preState(['floatBodyContent_cart1','cartInfo'],[]);
        const elements = new Array()
        for(let i = 0; i < data.length; i++)
        {
            elements.push(
                sydDOM.floatCart_tab({index:i})
            )
        }
        return elements
    }
    return createElement(
        'div',
        {
            style:styleComponent.floatBodyContent_({
                method:'add',
                style:{
                    // background:'blue',
                    display:preState(['floatBodyContent','processRender'],()=>{return false})('cart1') === true ? 'flex' : 'none',
                    flexDirection:'column',
                    rowGap:'10px',
                    alignItems:'center',
                    userSelect:'none',
                    position:'relative'
                }
            })
        },
        [
            createElement(
                'div',
                {
                    style:`height:100%;width:100%;position:absolute;background:rgba(255,255,255,.3);cursor:not-allowed;top:0;left:0;z-index:500;display:${webType !== 'advert' ? 'block' : 'none'}`
                }
            ),
            ...renderElem(),
            sydDOM.CartPageBelowPanel()
        ],{
            createState:{
                stateName:'floatBodyContent_cart1',
                state:{cartInfo:[]}
            },
            type:'floatBodyContent_cart1'
        }
    )
}

sydDOM.floatCart_tab = ({index}) =>{
    removeCart_elem = (index) =>{
        const floatBodyContent_cart1 = getState('floatBodyContent_cart1');
        const cart1 = getState('cart1')
        floatBodyContent_cart1.cartInfo.splice(index,1);
        cart1.cartItems = floatBodyContent_cart1.cartInfo.length;
        useState('floatBodyContent_cart1',{type:'a',value:floatBodyContent_cart1})
        useState('cart1',{type:'a',value:cart1})
    }
    return createElement(
        'div',
        {
            style:`height:100px;width:100%;display:flex;column-gap:10px;row-gap:10px;justify-content:center;padding:5px;align-items:center;position:relative;z-index:300;pointer-events:${webType === 'advert' ? 'auto' : 'none'}`
        },
        [
            createElement(
                'div',
                {
                    style:'height:80px;width:30%;max-width:120px',
                    class:'thinBorder'
                }
            ),
            createElement('p',{style:'width: 100%;text-align:left;transition:all linear .2s;font-size:16px;font-weight:500'},[
                createElement('p',{},[getcartInfo(index,'name')]),
                createElement('p',{style:'font-weight:600;margin-top:10px;font-size:15px;font-family:"Plus Jakarta Sans", sans-serif;'},['₦ '+getcartInfo(index,'price')]),
            ]),
            sydDOM.supplyCount({index:index}),
            createElement('i',{style:'height:10px;width:10px;font-size:10px;position:absolute;top:3px;right:3px;',class:"fa-solid fa-xmark click",onclick:`removeCart_elem(${index})`})
        ]
    )
}

sydDOM.supplyCount = ({index}) =>{
    addCartElem = (index,elem) =>{
        const floatBodyContent_cart1 = getState('floatBodyContent_cart1');
        switch(floatBodyContent_cart1.cartInfo[index].price + getTotalCart_elem() < 500000)
        {
            case true:
                floatBodyContent_cart1.cartInfo[index].count++;
                elem.parentElement.children[0].style.opacity = '1'
                elem.parentElement.children[0].style.pointerEvents = 'unset'
            break;
            default:
                alert('Total transaction exceeded ₦500,000')
        }
        useState('floatBodyContent_cart1',{type:'a',value:floatBodyContent_cart1})
    }

    removeCartElem = (index,elem) =>{
        const floatBodyContent_cart1 = getState('floatBodyContent_cart1');
        switch(floatBodyContent_cart1.cartInfo[index].count !== 0)
        {
            case true:
                floatBodyContent_cart1.cartInfo[index].count--;
            break;
        }
        useState('floatBodyContent_cart1',{type:'a',value:floatBodyContent_cart1});

        if(floatBodyContent_cart1.cartInfo[index].count === 0)
            {
                removeCart_elem(index)
            }
    }

    return createElement(
        'div',
        {
            style:'height:50px;min-width:fit-content;display:flex;align-items:center;justify-content:space-between;padding:5px;column-gap:5px',
            class:'thinBorder'
        },
        [
            createElement('i',{class:"fa-solid fa-square-minus click smallClickBg",style:styleComponent.smallClickBox(),onclick:`removeCartElem(${index},this)`}),
            createElement('p',{style:'padding:5px;font-size:14px;min-width:30px;text-align:center'},[
                `${preState(['floatBodyContent_cart1','cartInfo'],[])[index].count}`
            ]),
            createElement('i',{class:"fa-solid fa-square-plus click smallClickBg",style:styleComponent.smallClickBox(),onclick:`addCartElem(${index},this)`}),
        ]
    )
}

sydDOM.CartPageBelowPanel = () =>{
    const bool = () =>{
        const floatBodyContent_cart1 = preState(['floatBodyContent_cart1','cartInfo'],[]);
        return floatBodyContent_cart1.length > 0 ? true : false
    }

    return createElement(
        'div',
        {
            style:'padding:10px;height:fit-content;width:100%;max-width:500px;display:flex;flex-direction:column;row-gap:10px;position:sticky;bottom:0px;left:50%;transform:translateX(0%);z-index:400'
        },
        [
            sydDOM.subTotalDiv(),
            createElement(
                'div',
                {
                    style:`padding:10px 0;width:100%;background:#171717;color:#fff;font-weight:600;text-transform:capitalize;text-align:center;opacity:${bool() ? '1' : '.6'};cursor:${bool() ? 'pointer' : 'not-allowed'}`,
                    class:'click',
                    onclick:bool() ? `loadDecForm('${category}','checkout')` : ''
                },
                [
                    'checkout'
                ]
            )
        ]
    )
}

sydDOM.subTotalDiv = () =>{
    const getTotalCart = () =>{
        const floatBodyContent_cart1_el = preState(['floatBodyContent_cart1','cartInfo'],[]);
        let subTotal = 0
        for(let i = 0; i < floatBodyContent_cart1_el.length; i++)
        {
            subTotal += floatBodyContent_cart1_el[i].price * Number(floatBodyContent_cart1_el[i].count);
        }
        return `₦ ${subTotal}`
    }
    return createElement(
        'div',
        {
            style:'width:100%;display:flex;justify-content:space-between;align-items:center;row-gap:10px;font-weight:200;font-size:14px'
        },
        [
            'Subtotal',
            createElement('p',{style:'font-weight:600;'},[getTotalCart()])
        ]
    )
}

sydDOM.floatBodyContent_Msearch = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.floatBodyContent_({
                method:'add',
                style:{
                    // background:'pink',
                    display:preState(['floatBodyContent','processRender'],()=>{return false})('Msearch') === true ? 'flex' : 'none',
                    flexDirection:'column',
                    alignItems:'center'
                }
            })
        },
        [
            sydDOM.searchTab2()
        ]
    )
}

sydDOM.searchTab2 = () =>{
    return createElement(
        'div',
        {
            style:'height:50px;width:100%;max-width:450px;position:relative'
        },
        [
            createElement(
                'input',
                {
                    style:sydDOM.searchTab1Input().inherit(['attribute','style'])
                }
            ),
            createElement(
                'div',
                {
                    style:sydDOM.searchTab1Button().inherit(['attribute','style'])
                }
            )
        ]
    )
}
