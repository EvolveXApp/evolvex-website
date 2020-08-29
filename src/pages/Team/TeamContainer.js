import React, { Component } from "react";
import Team from "./Team";

import Iulia from "../../assets/team/Iuliatudor.png";
import Jr from "../../assets/team/jrlopez.png";
import Chris from "../../assets/team/chrisdohm.png";

import Jeremy from "../../assets/team/jeremytran.png";
import Uma from "../../assets/team/umarudanladi.png";
import Garnet from "../../assets/team/garnetcampbell.png";

import Michael from "../../assets/team/michaelzbeetnoff.png";
import Lisa from "../../assets/team/lisabenford.png";
import Cameron from "../../assets/team/cameronroberts.png";

import Todd from "../../assets/team/toddduncan.png";
import John from "../../assets/team/johnajeto.png";
import Felipe from "../../assets/team/felipeviera.png";
class TeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          profileImage: Iulia,
          name: "Iulia",
          title: "Chief Executive Officer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Jr,
          name: "J.R. Lopez",
          title: "Founder",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Chris,
          name: "Chris Dohm",
          title: "Chief Innovation Officer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Jeremy,
          name: "Jeremy Tran",
          title: "Chief Design Officer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Uma,
          name: "Uma Rudanladi",
          title: "Lead UX & UI Designer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Garnet,
          name: "Garnet Campbell",
          title: "Chief Learning Officer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Michael,
          name: "Michael Zbeetnoff",
          title: "Chief Technical Officer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Lisa,
          name: "Lisa Benford",
          title: "Marketing Strategist",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Cameron,
          name: "Cameron Roberts",
          title: "Web & App Developer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Todd,
          name: "Todd Duncan",
          title: "Photography Director",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: John,
          name: "John Ajeto",
          title: "Web Developer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
        {
          profileImage: Felipe,
          name: "Felipe Viera",
          title: "Junior Graphic Designer",
          description:
            "A CEO connects clients to all available people and resources within the company. The CEO is our connector and operations manager.",
        },
      ],
    };
  }
  render() {
    return <Team data={this.state.data} />;
  }
}

export default TeamContainer;
