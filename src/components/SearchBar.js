import React, { useState } from 'react';

const SearchBar = ({onTermSubmit}) => {
    //instantiate state to make it a controlled component
    //means storing datafor search term inside the component and not inside DOM
    const [term, setTerm] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        //call the callback function (onTermSubmit) passed into searchbar from the app component (parent) 
        //parameter will tell the parent component of the current term from the child component
        onTermSubmit(term);
    }
    
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input  value = {term} type="text" 
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </div>

                </form>
            </div>
        );
    };

export default SearchBar;  