'use client'
import React from 'react'
import { IntlProvider } from 'next-intl';

type Messages = Record<string, string>;

export function NextIntlProvider({
    locale,
    messages,
    children
}: {
    locale: "en" | "fr",
    messages: Messages,
    children: React.ReactNode
}) {
    return (
        <IntlProvider locale={locale} messages={messages}>
            {children}
        </IntlProvider>
    )
}