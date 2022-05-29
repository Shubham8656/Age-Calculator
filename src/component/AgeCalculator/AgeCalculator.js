import React, { useState } from "react";

const AgeCalculator = () => {
    const [age, setAge] = useState({ year: 0, month: 0, day: 0,hours:0,minutes:0,seconds:0 })
    const calculateAge = (e) => {
        const CurrentDate = new Date();
        const BirthDate = new Date(e.target.value);
        //current date
        const CurrentYear = CurrentDate.getFullYear()
        const CurrentMonth = CurrentDate.getMonth() + 1
        const CurrentDay = CurrentDate.getDate()
        //birth date
        const BirthYear = BirthDate.getFullYear()
        const BirthMonth = BirthDate.getMonth() + 1
        const BirthDay = BirthDate.getDate()
        console.log(CurrentMonth)

        if (CurrentMonth >= BirthMonth && CurrentDay >= BirthDay) {
            setAge({ ...age, year: CurrentYear - BirthYear,month:CurrentMonth-BirthMonth,day:CurrentDay-BirthDay})

        }
        else {
            setAge({ ...age, year: CurrentYear - BirthYear - 1, month: 12 - (BirthMonth - CurrentMonth),day:CurrentDay})
        }

    }

    return (
        <div className="ui container" style={{ display: 'flex', flexDirection: 'column',backgroundColor:"" }}>
            <div class="ui label" style={{fontSize:'120%'}}>
                Date of Birth <i class="calendar alternate icon"></i>
            </div>
            <br />
            <div class="ui input" style={{fontSize:'120%'}}>
                <input type="date" onChange={calculateAge} />
            </div>
            <h1 class="header" style={{ textAlign: 'center',color:'black' }}>
                {age.year}{' years '}{age.month}{' months '}{age.day}{' day '}
            </h1>
            <h2 class="header" style={{ textAlign: 'center',color:'grey' }}>
                {'= '}{age.day*24 + age.month*30*24 + age.year*12*30*24}{' hours'}
            </h2>
            <h3 class="header" style={{ textAlign: 'center',color:'grey' }}>
                {'= '}{(age.day*24 + age.month*30*24 + age.year*12*30*24)*60}{' minutes'}
            </h3>
        </div>
    )
}
export default AgeCalculator;