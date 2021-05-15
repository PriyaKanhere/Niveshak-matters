import React from 'react'
import { Accordion, OptForm } from '../components'
import FaqsData from '../fixtures/faqs.json'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequtly Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {
                    FaqsData.map((data) => (
                        <Accordion.Item key={data.key}>
                            <Accordion.Header>{data.header}</Accordion.Header>
                            <Accordion.Body>{data.body}</Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart
                your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}