import React from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from '../../../../components/Icon';
import {
    Input,
    InputGroup,
    Button,
    InputGroupAddon
} from './../../../../components';

export class CustomSearch extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        onSearch: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onSearch(this.state.value);
        }
    }

    render() {
        return (
            <InputGroup className={ this.props.className } size="sm">
                <InputGroupAddon addonType="prepend">
                    <FaIcon icon="search" fixedWidth />
                </InputGroupAddon>
                <Input
                    onChange={(e) => { this.setState({ value: e.target.value }) }}
                    value={ this.state.value }
                    className="bg-white"
                    placeholder="Type to search..."
                />
                {
                    this.state.value && (
                        <InputGroupAddon addonType="append">
                            <Button
                                outline
                                onClick={() => { this.setState({value: ''}) }}
                            >
                                <FaIcon icon="times" fixedWidth />
                            </Button>
                        </InputGroupAddon>
                    )
                }
            </InputGroup>
        )
    }
} 