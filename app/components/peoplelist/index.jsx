"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";

faker.seed(1);

const makeProfile = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
    };
};

const makeProfiles = () => {
    return faker.helpers.multiple
    (makeProfile, {count: 10});
};

const profiles = makeProfiles();

const fakeProfiles = makeProfiles();

export default function PeopleList() {
    const [profiles, setProfiles] = useState(fakeProfiles);
    const [inputSearchValue, setInputSearchValue] = useState("");

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log("Submitted form");
        const searchTerm = event.currentTarget.elements.search.value;
        console.log("searchTerm", searchTerm);

        setProfiles((prevProfiles) => {
            return prevProfiles.filter((person) => {
                return person.firstName.toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase());
            });
        });

    }
    return (
        <div>
          <section className="mb-2">
            <form onSubmit={handleOnSubmit} 
            className="flex flex-col gap-4">
                <label htmlFor="search" className="text-sm">
                    Search
                </label>

                <input 
                type="search" 
                id="search" 
                name="search" 
                className="p-2 rounded text-black"
                value={inputSearchValue}
                onChange={(event) => {
                    setInputSearchValue(event.currentTarget.value);
                    
                    setProfiles((prevProfiles) => {
                        return prevProfiles.filter((person) => {
                            return person.firstName.toLocaleLowerCase()
                            .includes(inputSearchValue.toLocaleLowerCase());
                        });
                    });
                }
                } />

                <input type="submit" className="p-2 border rounded cursor-pointer"></input>
                <button className="mt-2 bg-red-700 borderd" type="reset" onClick={() => setProfiles(fakeProfiles)}>

                </button>
                
            </form>
          </section>
            {profiles.map((profile) => {
                return (
                    <div className="w-full p-2 m-2 border" key={profile.id}>
                        {profile.firstName}
                        </div>
                );
            })}
        </div>
    );
}