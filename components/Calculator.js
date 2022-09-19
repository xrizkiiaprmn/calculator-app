import { useState } from "react";
import ButtonCalculator from "./ButtonCalculator";
import CalculateHistory from "./CalculateHistory";

export default function Calculator() {
  const [displayCalculate, setDisplayCalculate] = useState("");
  const [dataCalculate, setDataCalculate] = useState("");
  const [result, setResult] = useState(0);
  const [historyCalculate, setHistoryCalculate] = useState([]);
  const [validateOperator, setValidateOperator] = useState(0);

  const displayCalculateHandler = (value, e) => {
    setDisplayCalculate(`${displayCalculate}${value}`);
    setDataCalculate(`${dataCalculate}${value}`);
  };

  const operatorHandler = (value, e) => {
    if (validateOperator)
      return alert(
        "Operator telah ditetapkan! Hanya diperbolehkan menggunakan 1 operator matematika"
      );
    setValidateOperator(1);
    setDisplayCalculate(`${displayCalculate}${value}`);
    setDataCalculate(`${dataCalculate}${value}`);
  };

  const clearDisplay = () => {
    setDataCalculate("");
    setDisplayCalculate("");
    setValidateOperator(0);
    setResult(0);
  };

  const sliceDisplay = () => setDisplayCalculate(displayCalculate.slice(0, -1));

  const calculate = (data, e) => {
    setDisplayCalculate("");

    let hasil = 0;
    let angkaPertama = "";
    let angkaKedua = "";
    let operator = "";
    let operatorCondition = false;
    const dataForMap = data.split("");

    dataForMap.map((item) => {
      if (isNaN(Number(item))) {
        operatorCondition = true;
        operator = item;
      } else if (!isNaN(Number(item)) && !operatorCondition) {
        angkaPertama += item;
      } else if (!isNaN(Number(item)) !== NaN && operatorCondition) {
        angkaKedua += item;
      }
    });

    const angkaPertamaConverted = Number(angkaPertama);
    const angkaKeduaConverted = Number(angkaKedua);

    switch (operator) {
      case "+":
        hasil = angkaPertamaConverted + angkaKeduaConverted;
        break;
      case "-":
        hasil = angkaPertamaConverted - angkaKeduaConverted;
        break;
      case "×":
        hasil = angkaPertamaConverted * angkaKeduaConverted;
        break;
      case "÷":
        hasil = angkaPertamaConverted / angkaKeduaConverted;
        break;
      case "%":
        hasil = angkaPertamaConverted % angkaKeduaConverted;
        break;
    }

    setDataCalculate(`${hasil}`);
    setResult(hasil);
    setValidateOperator(0);
    setHistoryCalculate([
      ...historyCalculate,
      { angkaPertama, angkaKedua, operator, hasil },
    ]);
  };

  return (
    <>
      <div className='xl:w-4/12 lg:w-5/12 w-full bg-cyan-600 p-3'>
        <div className='bg-white h-[150px] p-2 text-right'>
          <div className='text-8xl truncate'>{result}</div>
          <div className='text-4xl text-black/30 truncate'>
            {displayCalculate}
          </div>
        </div>
        <div className='flex flex-wrap pt-5'>
          <ButtonCalculator variant={0} action={clearDisplay.bind(this)}>
            C
          </ButtonCalculator>
          <ButtonCalculator variant={0} action={sliceDisplay.bind(this)}>
            <img src='/delete.svg' alt='delete' width={35} height={35} />
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={operatorHandler.bind(this, "%")}
          >
            <img src='/percent.svg' alt='percent' width={35} height={35} />
          </ButtonCalculator>
          <ButtonCalculator
            variant={1}
            action={operatorHandler.bind(this, "÷")}
          >
            <img src='/divided.svg' alt='divided' width={35} height={35} />
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 7)}
          >
            7
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 8)}
          >
            8
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 9)}
          >
            9
          </ButtonCalculator>
          <ButtonCalculator
            variant={1}
            action={operatorHandler.bind(this, "×")}
          >
            <img src='/substract.svg' alt='substract' width={35} height={35} />
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 4)}
          >
            4
          </ButtonCalculator>{" "}
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 5)}
          >
            5
          </ButtonCalculator>{" "}
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 6)}
          >
            6
          </ButtonCalculator>
          <ButtonCalculator
            variant={1}
            action={operatorHandler.bind(this, "-")}
          >
            <img src='/min.svg' alt='min' width={35} height={35} />
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 1)}
          >
            1
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 2)}
          >
            2
          </ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 3)}
          >
            3
          </ButtonCalculator>
          <ButtonCalculator
            variant={1}
            action={operatorHandler.bind(this, "+")}
          >
            <img src='/plus.svg' alt='plus' width={35} height={35} />
          </ButtonCalculator>
          <ButtonCalculator variant={0}>r.</ButtonCalculator>
          <ButtonCalculator
            variant={0}
            action={displayCalculateHandler.bind(this, 0)}
          >
            0
          </ButtonCalculator>
          <ButtonCalculator
            variant={2}
            action={calculate.bind(this, dataCalculate)}
            widthCustom='w-6/12'
          >
            <img src='/equals.svg' alt='equals' width={35} height={35} />
          </ButtonCalculator>
        </div>
      </div>
      <CalculateHistory data={historyCalculate} />
    </>
  );
}
