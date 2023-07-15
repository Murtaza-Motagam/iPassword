import React, { useState } from 'react'
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './components/Character'
function App() {


  let passwordLength = 16;

  const [password, setPassword] = useState("");
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)


  const handleGeneratePassword = () => {
    if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols) {
    }
    else {
      let characterList = ""
      if (includeNumbers) {
        characterList = characterList + numbers
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters
      }
      setPassword(createPassword(characterList))

    }


  }

  const createPassword = (characterList) => {
    let password = ""
    const characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }


  return (
    <>
      <div className="container-isfullwidth">
        <section className="hero is-dark is-halfheight">
          <div className="hero-body is-flex is-align-items-center is-flex-direction-column is-justify-content-center">
            <div className="is-flex is-align-items-center is-flex-direction-column is-justify-content-center">
              <p className="title is-size-1 font-set">
                Generate a Strong Security Password
              </p>
              <p className="subtitle is-size-3 font-set2">
                By using iPassword Generator
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child notification border-r-1 is-dark">
            <p className="title mb-3 font-set3">Generate Password</p>
            <p className="subtitle mt-3 font-set4">Choose the below option according to your customisation</p>
            <div className="content">
              {/* Content Starts here */}
              {/* checkbox-1 starts here */}

              <div className="field my-3 ">
                <div className="control is-flex is-align-items-center is-justify-content-start">


                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" onChange={(e) => setIncludeUpperCase(e.target.checked)} checked={includeUpperCase}/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>

                  <label className="is-size-4 ml-3 font-set5">Include Uppercase</label>

                </div>
              </div>

              {/* checkbox-1 ends here */}

              {/* checkbox-2 starts here */}

              <div className="field my-3">
                <div className="control is-flex is-align-items-center is-justify-content-start">


                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)}/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>

                  <label className="is-size-4 ml-3 font-set5">Include Lowercase</label>

                </div>
              </div>

              {/* checkbox-2 ends here */}

              {/* checkbox-3 starts here */}

              <div className="field my-3">
                <div className="control is-flex is-align-items-center is-justify-content-start">


                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>

                  <label className="is-size-4 ml-3 font-set5">Include Numbers</label>

                </div>
              </div>

              {/* checkbox-3 ends here */}

              {/* checkbox-4 starts here */}

              <div className="field my-3">
                <div className="control is-flex is-align-items-center is-justify-content-start">


                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>

                  <label className="is-size-4 ml-3 font-set5">Include Special signs</label>

                </div>
              </div>

              <div className="field my-3 ">
                <div className="control flex-set is-flex is-align-items-center is-justify-content-start">
                  <div className="button mt-4 has-text-weight-bold is-link"  onClick={handleGeneratePassword}>Generate</div>
                </div>
              </div>

              {/* checkbox-4 ends here */}


              <div className="field mt-5">
                <div className="control">
                  <input className="input has-text-centered is-medium has-text-white width-full" style={{ width: "60%", background: "none" }} type="text" value={password} placeholder="Click on button Generate Password " readOnly/>
                </div>
              </div>
              {/* Content ends here */}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
