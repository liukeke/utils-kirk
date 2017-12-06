/**
 * Created by Kirk liu on 2017/12/6.
 */
import React from 'react';
import utils from './utils';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div>
                    截取URL参数:https://www.baidu.com/s?ie=utf-8,ie:{utils.urlParam('ie', 'https://www.baidu.com/s?ie=utf-8')}</div>
            </div>
        );
    }
}

export default Index;