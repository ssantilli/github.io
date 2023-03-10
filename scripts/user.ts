"use strict";

//IIFE - Immediately Invoked Functional Expression
namespace core {

    export class User
    {
        //constructor
        private m_displayName: string;
        private m_emailAddress: string;
        private m_username: string;
        private m_password: string;

        constructor(displayName : string = "", emailAddress: string = "",
                            username: string = "", password: string = "") {
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }


        //GETTERS and SETTERS
        public get DisplayName() : string {
            return this.m_displayName;
        }

        public set DisplayName(displayName : string){
            this.m_displayName = displayName;
        }

        public get EmailAddress() : string {
            return this.m_emailAddress;
        }

        public set EmailAddress(emailAddress : string){
            this.m_emailAddress = emailAddress;
        }

        public get Username() : string {
            return this.m_username;
        }

        public set Username(username : string ){
            this.m_username = username;
        }

        public get Password() : string {
            return this.m_password;
        }

        public set Password(password : string ){
            this.m_password = password;
        }

        //overridden methods
        public toString() : string {
            return `Display Name; ${this.DisplayName}\nEmail Address: ${this.EmailAddress}\nUsername: ${this.Username}`;
        }

        /**
         * Returns  JSON user equivalent to caller
         * @returns {{ Username: string; DisplayName: string; EmailAddress : string } }
         */
        public toJSON() : { Username: string; DisplayName: string; EmailAddress : string } {
            return {
                "DisplayName" : this.m_displayName,
                "EmailAddress" : this.m_emailAddress,
                "Username": this.m_emailAddress
            }
        }

        //TODO -  need to fix the any parameter
        public fromJSON(data : User) : void {
            this.m_displayName = data.DisplayName;
            this.m_emailAddress = data.EmailAddress;
            this.m_username = data.Username;
            this.m_password = data.Password;
        }

        //Serialize - to csv format
        /**
         * This method returns the objects properties into a comma-separated string
         * @returns {String}
         */
        public serialize() : string | null {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== ""){
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.Username}`;
            }
            console.error("One or more of the properties of the User object are missing or iovalid");
            return null;
        }

        /**
         * This method takes a command separated string, tokenizes to create a user object
         * @param {string
         */
        public deserialize(data : string) : void{
            let propertyArray : string [] = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }

    }

}
