import React from 'react'

class Paginator extends React.Component {

    render() {

        const pages = Math.ceil(this.props.apiInfo.count / 10);
        const page = this.props.apiInfo.previous === null ? 1 :
            Number((this.props.apiInfo.previous).slice(-1)) + 1;

        return (
            <div className='paginator col-12'>
                <ul className={`pagination justify-content-center pr-5`}>
                    <li className={`page-item page-link 
                    ${this.props.apiInfo.previous === null ? "disabled" : ""}`}
                        onClick={() => this.props.handlePageSelection(this.props.apiInfo.previous)}
                    >
                        &laquo;
                    </li>
                    <li className={`page-item page-list p-3 page-text`}>Page {page} of {pages}</li>
                    <li className={`page-item page-link 
                    ${this.props.apiInfo.next === null ? "disabled" : ""}`}
                        onClick={() => this.props.handlePageSelection(this.props.apiInfo.next)}
                    >
                        &raquo;
                    </li>
                </ul>
            </div>
        )


    }


}

export default Paginator