function c(msg)
{
  console.log(msg)
}

function printObject(obj)
{ 
	for (let n in obj)
  {
    if(typeof(obj[n]) === 'object')
      {
      console.log(`${n} :`)
	    printObject(obj[n])
      }
    else
     	console.log(`${n} : ${obj[n]}`)
  }
}


const address = {city: 'netanya' , country: 'israel'}
const familyPersons = [{name: 'lidia' , age: '67'}, {name: 'shalom' , age: '74'}]
const family = {familyPersons}

const myself ={name: 'david', 
               age: '26', 
               address , 
               familyPersons, 
               getAddress() {
                 return this.address
              },
              printMyName()
               {
                 c(this.name)
               },
             addFamily(name,age)
               {
                 familyPersons.push({name, age})
               },
               setName(name)
               {
                 this.name = name
               }
              }
               
//printObject(myself)
c("***********************************")


function MobilePhone(model,size,price,number)
{
  var res = {model,
             size,
             price,
             number,
            getNumber(){
            	return res.number
            },
             setNumber(num){
               res.number = num
             }
            }
  return res
}

const xiaomi = MobilePhone('redmi','5','200','21234324')


function MobilePhoneCons(model,size,price,number)
{
  //this.model = model
  this.size = size
  this.number = number
	//this.price = price
  let _price = 0 	
  this.setPrice = (newPrice) => {
    if( newPrice > price && newPrice > 0)
    {
      _price = newPrice
    }
  }
  this.getPrice = () => { return _price}
  this.getNumber = function(){
	              return this.number
            }
    
	this.setNumber= function(num){
              this.number = num
    
  }
  let _model = ""
  this.getModel = () => { return _model }
  this.setModel = (newModel) => { 
    if(newModel.len > 4) 
    { 
      _model = newModel
    }
  }
  
}

const iphone = new MobilePhoneCons('3s','4',23,'123123')












