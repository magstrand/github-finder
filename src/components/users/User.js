import React, {useEffect, Fragment, useContext} from "react";
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";


const User = ({ match}) => {

    const githubContext = useContext(GithubContext);
    const {getUser, loading, user, repos, getUserRepos, } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const {name, avatar_url, location, bio, blog, login, html_url, followers,
        following, public_repos, public_gists, hireable, company} = user;

    if(loading) return <Spinner/>;

        return (
            <Fragment>
                <Link to="/" className={"btn btn-light"}>
                    Tilbake til søk
                </Link>
                Leter etter jobb:{" "}
                {hireable ? (
                    <i class="fa fa-check-square text-success" />
                    ) : (
                    <i className="fas fa-times-circle text-primary" />
                    )}
                    <div className={"card.grid-2"}>
                        <div className={"all-center"}>
                          <img src={avatar_url} className={"round-img"} alt={""} style={{width: "150px"}}/>
                          <h1>{name}</h1>
                            <div>
                                {location && <Fragment>
                                    <p>Lokasjon: {location}</p>
                                </Fragment>}
                            </div>


                        </div>
                        <div>
                            {bio && <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                            }
                            <a href={html_url} className={"btn btn-dark my-1"}>Sjekk ut github-profilen</a>

                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username: </strong>{login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        <strong>Selskap: </strong>{company}
                                    </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                        <strong>Webside: </strong>{blog}
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className={"card text-center"}>
                    <div className={"badge badge-primary"}>Følgere: {followers}</div>
                    <div className={"badge badge-success"}>Følger: {following}</div>
                    <div className={"badge badge-light"}>Offentlige repoes: {public_repos}</div>
                    <div className={"badge badge-danger"}>Offentlige Gists: {public_gists}</div>

                </div>

                <Repos repos={repos}/>

            </Fragment>
        );

}

export default User;