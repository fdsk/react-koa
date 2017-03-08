/**
 * Created by pomy on 08/02/2017.
 */

'use strict';

import './index.css';

import React, {Component,PropTypes} from 'react';
{{#router}}
import { Link} from 'react-router';
{{/router}}

export  default  class Hello extends Component{
    constructor (){
        super();
    }

    static propTypes = {
        desc: PropTypes.string
    };

    static defaultProps = {
        desc: 'A simple template webpack 2 + react 15 + Koa 2 setup for projects'
    };

    render(){
        return (
            <div className="desc">
                <p>{this.props.desc}</p>
                <img src='/assets/logo.png' alt="logo"/>
                {{#router}}
                <Link to="/info">查看项目信息</Link>
                {{/router}}
            </div>
        )
    }
}