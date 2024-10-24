import React from "react";
import "../styles/globals.css";
import {Lato} from 'next/font/google'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

const preview = {
  decorators: [
    (Story) => (
      <div className={`preview ${lato.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;