import React from "react"
import { Container, Input, Button, Text, Break } from "./styles/opt-form"

export default function OptForm({ children, ...restProp }) {
    return (<Container {...restProp}>{children}</Container>)
}

OptForm.Input = function OptFormInput({ children, ...restProp }) {
    return (
        <Input {...restProp}>{children}</Input>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
OptForm.Break = function OptBreak({ ...restProps }) {
    return <Break {...restProps} />;
}
OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}