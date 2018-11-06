            var a = []
            b = []
            c = []
            d = []
            a1 = []
            a2 = []
            a3 = []
            a4 = []
            function data(x,y) {
                v = x
                w = y
                    for(i=0 ; i <= x ; i++){
                        if(x % i == 0){
                            a.push(i)
                            
                        }
                    }

                    for(i=0 ; i <= y ; i++){
                        if(y % i == 0){
                            b.push(i)
                            
                        }
                    }
                    
                    for(i = 0; i <= a.length ; i++){
                        for(j = 0; j <= b.length ; j++){
                        if(a[i] / b[j] == 1)
                        c.push(a[i])
                        }
                    }
                    c.reverse()
                    d.push(c[0])
                    
                    for(i=0 ; i <= x*5 ; i++){
                            a1.push(x * i)
                    }
                    for(i=0 ; i <= y*5 ; i++){
                            a2.push(y * i)
                    }
                    for(i = 0; i <= a1.length ; i++){
                        for(j = 0; j <= a2.length ; j++){
                        if(a1[i] / a2[j] == 1)
                        a3.push(a1[i])
                        }
                    }
                    a4.push(a3[0])
                    // a4.push(data('x'))
                }
                    // console.log(a4)
                    data('2','3')
                    console.log('FPB '+ v + ' & ' + w +' = '+ d[0])
                    console.log('KPK '+ v + ' & ' + w +' = '+ a4[0])
                    // console.log(d[0])
                    // console.log('KPKnya adalah')
                    // console.log(a4[0])
                
                


