import React, {useState, useContext} from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const  Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState("");

   const onSubmit = (tekst) =>  {
        tekst.preventDefault();
        if(text===""){
            alertContext.setAlert("Søkefeltet kan ikke være tomt", "light");
        }
        else {
            githubContext.searchUsers(text);
            setText("");
        }

    }
    const onChange = (event) => setText( event.target.value)

        return (
            <div>
                <form onSubmit={onSubmit} className={"form"}>
                    <input type={"text"}
                           name={"text"}
                           placeholder={"Søk etter brukere..."}
                            value={text}
                           onChange={onChange}
                    />

                    <input type={"submit"}
                           value={"Søk"}
                           className={"btn btn-darck btn-block"}/>
                </form>
                {githubContext.users.length>0 && <button className={"btn btn-light btn-block"} onClick={githubContext.clearUsers}>Tøm søkefeltet</button>
                }
            </div>
        )
}

export default Search;
