"use strict";
namespace core
{
    export class Router {

        //public properties
        private m_activeLink: string;
        private m_routingTable: string[];
        private m_linkData: string;

        /**
         * @returns {string}
         */
        public get ActiveLink() : string {
            return this.m_activeLink;
        }

        /**
         * @param string
         */
        public set ActiveLink(link : string){
            this.m_activeLink = link;
        }

        /**
         * @returns {string}
         */
        public get LinkData() : string {
            return this.m_linkData;
        }

        /**
         * @param string
         */
        public set LinkData(linkData : string){
            this.m_linkData = linkData;
        }

        //constructor
        /**
         * Creates an instance of the Router.
         */
        constructor() {
            this.m_activeLink = "";
            this.m_routingTable = []; //explicit empty array
            this.m_linkData = "";
        }

        //public methods
        /**
         * This method adds a new route to the Routing Table
         * @param {string} route
         * @returns {void}
         */
        public Add(route: string) : void{
            this.m_routingTable.push(route);
        }

        /**
         * This method replaces the reference for the Routing Table with a new one
         * Note: Routes should begin with a '/' character
         * @param {string[]} routingTable
         * @returns {void}
         */
        public AddTable(routingTable : string []) : void{
             this.m_routingTable = routingTable;
        }

        /**
         *  This method finds and returns the index of the route in the Routing Table, otherwise,
         *  it returns -1 if the route is not found.
         * @param {string} route
         * @return {number}
         */
        public Find(route : string) : number {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * This method removes a Route from the  Routing Table. It returns true if the
         * route was successfully removed.
         * @param route
         */
        public Remove(route : string) : boolean{
            if(this.Find(route) > -1) {
                //remove the route
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        //public override methods
        /**
         * This method return the routing table in a commma separated string.
         * Override the inherited toString
         * @override
         * @returns {string}
         */
        public toString() : string {
            //arrays using toString() automatically print as csv
            return this.m_routingTable.toString();
        }

    }

}

// Instantiate a Router
let router : core.Router = new core.Router();

// Add default routing table to router object
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit"
]);

// alias for location.pathname
let route : string = location.pathname;

//IF route is found in the Routing Table
//SET ActiveLink to route
//ELSE 404 page if route not found
router.ActiveLink = (router.Find(route) > -1)
                    ? ( (route == "/") ? "home" : route.substring(1) )
                    : ( "404" );



