import React from "react";

const EdycjaTabeli = props =>{
    return(
        <div className="EdycjaTabeli">
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj pesel</label>
                <input type="text" name="pesel" id="pesel" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} />  
            </div>
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj imię</label>
                <input type="text" name="imie" id="imie" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj nazwisko</label>
                <input type="text" name="nazwisko" id="nazwisko" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj pełny adres</label>
                <input type="text" name="adres" id="adres" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj numer telefonu</label>
                <input type="text" name="nrtel" id="nrtel" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj adres email</label>
                <input type="text" name="email" id="email" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaTabeli_input-grupa">
                <label htmlFor="poleTekstowe">Podaj płeć</label>
                <input type="text" name="plec" id="plec" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>

            <button className="btnConfirm" onClick={() =>props.onSave()}>Dodaj</button>
            <button className="btnCancel">Anuluj</button>


        </div>

        
    )
}

export default EdycjaTabeli;