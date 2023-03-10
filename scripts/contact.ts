"use strict";

namespace core {

    export class Contact {

        private m_fullName: string;
        private m_contactNumber : string;
        private m_emailAddress : string

        constructor(fullName :string = "", contactNumber: string = "", emailAddress: string = "") {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }

        //GETTERS and SETTERS
        public get FullName() : string {
            return this.m_fullName;
        }

        public set FullName(fullName : string){
            this.m_fullName = fullName;
        }

        public get ContactNumber() : string {
            return this.m_contactNumber;
        }

        public set ContactNumber(contactNumber : string ){
            this.m_contactNumber = contactNumber;
        }

        public get EmailAddress() : string {
            return this.m_emailAddress;
        }

        public set EmailAddress(emailAddress : string ){
            this.m_emailAddress = emailAddress;
        }

        /**
         * This method is called to display the contents of the Contact objects properties.
         * @returns {void}
         */
        public toString() : string {
            return `Full Name: ${this.FullName}\nContact Number: ${this.ContactNumber}\n
                        Email Address: ${this.EmailAddress}`;
        }

        /**
         * Convert a Contact object into a serialized (csv) string
         * @returns {(string | outline)}
         */
        public serialize() : string | null {
            if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            console.error("One or more of the properties of the Contact object are missing or iovalid");
            return null;
        }

        /**
         * Deserialize for read from localStorage - setting contact attributes
         * Assumes that data is in common-separated format (string array of properties)
         * @param {string} data
         */
        public deserialize(data : string) : void {
            let propertyArray : string[] = data.split(",");
            this.m_fullName = propertyArray[0];
            this.m_contactNumber = propertyArray[1];
            this.m_emailAddress = propertyArray[2];
        }

    }

}

