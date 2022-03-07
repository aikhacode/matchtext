
export function cocokTo(frasa,kalimat){
    // console.log(frasa,'|',kalimat)
    
    let jml = 0
    let splited_frasa = frasa.trim().split(' ').map((item) => {
        return {
            kata:item,
            match:false
        }
    })

    let splited_kal = kalimat.trim().split(' ').map((item) => {
        return {
            kata:item,
            match:false
        }
    })

    splited_frasa.forEach((item1, index1, arr1) => {
         splited_kal.forEach((item2, index2, arr2) => {
            if ( item2.kata === item1.kata ) {
                arr1[index1].match = true 
                arr2[index2].match = true
                jml++ 
            }
         })
    })
    
      
    // console.log('frasa',splited_frasa)
    // console.log('kal',splited_kal)

    return {
        count: jml,
        frasa: splited_frasa,
        hasil: splited_kal,

    }
    
}

export function cocokArrToHtml(arr,classMatch='cocok')
{
    let str='' 
    arr.forEach((item) => {
        let span = {
            start: ' ',
            end:''
        }

        if (item.match) {
            span.start = `<span class='${classMatch}'>`
            span.end = "</span>"
        }
        str = `${str}${span.start}${item.kata}${span.end}` 
    })

    return str
}

