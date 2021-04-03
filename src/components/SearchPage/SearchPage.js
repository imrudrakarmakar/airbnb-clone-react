import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";
import SearchResult from "../SearchResult/SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 26 august to 30 august • 2 guests</p>
                <h1>Stay nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi Kitchen • Free parking • Washing Machine"
                star="4.73"
                price="$50 / night"
                total="$176 total"
            />
            <SearchResult 
                img="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi Kitchen • Free parking • Washing Machine"
                star="4.8"
                price="$40 / night"
                total="$154 total"
            />
            <SearchResult 
                img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi Kitchen • Free parking • Washing Machine"
                star="4.9"
                price="$60 / night"
                total="$210 total"
            />
            <SearchResult 
                img="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi Kitchen • Free parking • Washing Machine"
                star="3.5"
                price="$55 / night"
                total="$165 total"
            />
            <SearchResult 
                img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi Kitchen • Free parking • Washing Machine"
                star="4.4"
                price="$65 / night"
                total="$198 total"
            />
            <SearchResult 
                img="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi Kitchen • Free parking • Washing Machine"
                star="4.63"
                price="$45 / night"
                total="$160 total"
            />
        </div>
    )
}

export default SearchPage;
