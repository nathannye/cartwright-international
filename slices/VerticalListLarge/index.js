import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const VerticalListLarge = ({ slice }) => (
  <section className="verticalListLarge">
    <div className="largeListEntry">
      <span className="lineTop"></span>
      <div>
        <h3>title</h3>
        <div>
          <h4>subhead</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas
            explicabo asperiores magnam provident ullam accusantium officiis.
          </p>
          <ul>
            <li>thing</li>
            <li>thing</li>
            <li>thing</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
