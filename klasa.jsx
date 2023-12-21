import { Component } from 'react';
import Wypisanie from './Wypisanie';
import EdycjaTabeli from './edycjaTabeli';

class klasa extends Component{
    constructor(){
        super();
        this.state = {
            Wpisy:[
            ],
            edytowaneTabeli:{
                pesel:"",
                imie:"",
                nazwisko:"",
                adres:"",
                nrtel:"",
                email:"",
                plec:"",
            },
        };

        this.dodawanieWpisu = this.dodawanieWpisu.bind(this);
        this.zapisywanieTabeli = this.zapisywanieTabeli.bind(this);
    }

    dodawanieWpisu(val){
        this.setState(prevState => {
            return{
                edytowaneTabeli: Object.assign(prevState.edytowaneTabeli, val)
            }
        })
    }

    zapisywanieTabeli(){
        this.setState(prevState => ({
            Wpisy: [...prevState.Wpisy, prevState.edytowaneTabeli],
            edytowaneTabeli:{
                pesel:"",
                imie:"",
                nazwisko:"",
                adres:"",
                nrtel:"",
                email:"",
                plec:""
            }
        }))
    }

    render(){
        
        const Wpis = this.state.Wpisy.map(element =>{
            return <Wypisanie key={element.pesel} pesel={element.pesel} imie={element.imie} nazwisko={element.nazwisko} adres={element.adres} nrtel={element.nrtel} email={element.email} plec={element.plec}/>
         })
         return(
         <div className="EdycjaTabeli">
            
            
            <EdycjaTabeli onInputChange={val=>this.dodawanieWpisu(val)} onSave={() => this.zapisywanieTabeli()}/>
            <table class="tabelka">
                <tr>
                    <td><strong>Pesel</strong></td>
                    <td><strong>Imie</strong></td>
                    <td><strong>Nazwisko</strong></td>
                    <td><strong>Pełny adres</strong></td>
                    <td><strong>numer telefonu</strong></td>
                    <td><strong>email</strong></td>
                    <td><strong>płeć</strong></td>
                </tr>
                {Wpis}
            </table>
            
         </div>
         );
    }
}
export default klasa;