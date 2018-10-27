import React from 'react';
import './Loader.css';


class Load extends React.Component {

componentDidMount(){
    window.onload = loader;
    function loader() {
        const words=["Zero","One","two","Three","Four","five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Ninteen","Twenty","twentyone","Twentytwo","Twenty three","Twenty four","Twenty five","Twenty six","Twenty seven","Twenty eight","Twenty nine","Thirty","Thirty one","Thirty two","Thirty three","Thirty four","Thirty five","Thirty six","Thirty seven","Thirty eight","Thirty nine","Foutrty","Fourty one","Fourty two","Fourty three","Fourty four","Fourty five","Fourty six","Fourty seven","Fourty eight","Fourty nine","Fifty","Fifty one","Fifty two","Fifty three","Fifty four","Fifty five","Fifty six","Fifty seven","Fifty eight","Fifty nine","Sixty","Sixty one","Sixty two","Sixty three","Sixty four","Sixty five","Sixty six","Sixty seven","Sixty eight","Sixty nine","Seventy","Seventy one","Seventy two","Seventy three","Seventy four","Seventy five","Seventy six","Seventy seven","Seventy eight","Seventy nine","Eighty","Eighty one","Eighty two","Eighty three","Eighty four","Eighty five","Eighty six","Eighty seven","Eighty eight","Eighty nine","Ninety","Ninety one","Ninety two","Ninety three","Ninety four","Ninety five","Ninety six","Ninety seven","Ninety eight","Ninety nine","Hundred"];
        let text = document.querySelector('.loader-text')
      let loaderPage = document.querySelector('.loader-page');
      let counter = document.querySelector('.loader-counter');
      let fill = document.querySelector('.loader-fill');
      let amount = 10;
      let interval = setInterval(loop, 50);
      function loop() {
        if (amount >= 100) {
          clearInterval(interval);
          loaderPage.style.visibility = 'hidden';
          loaderPage.style.opacity = '0'
        }else {
          amount++;
          counter.textContent = amount ;
          text.textContent = words[amount];
        }
      }
    }
};


  render() {
    return (  

        <div className="loader-page">
        <div className="loader-container">
          <div className="loader-counter">
            <p>0</p>
          </div>
            <div className="loader-text" style={{ zIndex:55,fontWeight:'bold',color:'white',fontSize:'40px',backgroundColor:'black',width:'300px',textAlign:'center',fontFamily:'sans-serif' }}>
                <b>Loading..</b>
            </div>

        </div>
        </div>      
    ); 
  }
}
export default Load;