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

sydDOM.contactBody = () =>{
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
            createElement(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    createElement('strong',{style:'text-transform:capitalize;color:#171717'},['address']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px'},['19 Bururu Drive, Infant Jesus, Asaba. Delta State.'])
                ]
            ),
            createElement(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    createElement('strong',{style:'text-transform:capitalize;color:#171717'},['phone number']),
                    createElement('p',{style:'font-weight:400;font-size:14px;margin-left:20px'},['09073338222'])
                ]
            ),
        ]
    )
}