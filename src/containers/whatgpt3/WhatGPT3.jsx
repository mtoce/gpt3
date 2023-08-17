import React from 'react'
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Our AI can help automate unlimited aspects of business and leisure by understanding social dynamics and how to properly answer a wide variety of questions." />
        <Feature title="Knowledgebase" text="By providing AI with an immense amount of data from the web, they are experts in many fields and can provide high quality direction to users." />
        <Feature title="Education" text="These AI bots will continue to be trained over time by being trained on data provided from the internet, in doing so improving their usability." />
      </div>

    </div>
  )
}

export default WhatGPT3