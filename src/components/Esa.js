import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { NavBar } from './Navigation';

export function EsaScreen() {
return (
    <section class="content-box">
            <h1 class="page-title">ESA Survey</h1>
            <div class="ESA-detail">
                <h1>Are you in need of an Emotional Support Animal?</h1>
                <p>
                    Emotional Support Animal support animals provide companionship, 
                    relieve loneliness, and sometimes help with depression, anxiety, 
                    and certain phobias, but do not have special training to perform 
                    tasks that assist people with disabilities.
                </p>
            </div>
            <iframe className="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSe_jhw-GfKX2oK2QIP_kht1RcJ9iZpHzA9XydO6SKPNs1DyiQ/viewform?embedded=true">Loading…</iframe>
            
            <div className="spacer"></div>
            <NavBar />
        </section>
    );
}