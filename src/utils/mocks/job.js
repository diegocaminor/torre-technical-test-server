const jobMock = {
  aggregators: {},
  offset: 0,
  results: [
    {
      id: "8wDJGerl",
      objective: "Backend Engineer - Nodejs",
      type: "full-time-employment",
      organizations: [
        {
          id: 578239,
          name: "Zipdev",
          picture: "https://torre-media.s3-us-west-2.amazonaws.com/Zipdev.jfif",
        },
      ],
      locations: [],
      remote: true,
      external: false,
      deadline: "2021-01-15T04:30:00.000Z",
      status: "open",
      compensation: {
        data: {
          code: "range",
          currency: "USD$",
          minAmount: 70000.0,
          maxAmount: 90000.0,
          periodicity: "yearly",
        },
        visible: true,
      },
      skills: [
        {
          name: "Back end development",
          experience: "1-plus-year",
        },
        {
          name: "Node.js",
          experience: "1-plus-year",
        },
        {
          name: "Scrum",
          experience: "1-plus-year",
        },
      ],
      members: [
        {
          subjectId: "220890",
          name: "Manuela vargas Jaramillo",
          username: "Manuela.Vargas",
          professionalHeadline: "Independent Recruiter",
          picture:
            "https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg",
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: "Michael Lenny",
          username: "6a2d14ca-19aa-43c5-98e8-076d68753548",
          professionalHeadline: "Co-founder",
          picture:
            "https://torre-media.s3-us-west-2.amazonaws.com/Michael+Lenny.jfif",
          member: true,
          manager: false,
          poster: false,
          weight: 0.0,
        },
      ],
      questions: [],
      context: {
        signaled: [],
      },
      _meta: {
        rank: 1.0,
        scorer: {
          "@type": "and",
          score: 0.8262792560975609,
          and: [
            {
              "@type": "and",
              score: 0.8297487375,
              and: [
                {
                  "@type": "and",
                  score: 0.831372475,
                  and: [
                    {
                      "@type": "and",
                      score: 0.8327449499999999,
                      and: [
                        {
                          "@type": "concrete",
                          id: "skill",
                          input: {
                            criteria: {
                              skills: ["nodejs"],
                            },
                            opportunity: {
                              skills: [
                                "Back end development",
                                "Node.js",
                                "Scrum",
                              ],
                            },
                          },
                          score: 0.6654899,
                        },
                        {
                          "@type": "concrete",
                          id: "experience",
                          input: {
                            criteria: {
                              experiences: {
                                nodejs: 0.0,
                              },
                            },
                            opportunity: {
                              experiences: {
                                "Back end development": 12.0,
                                "Node.js": 12.0,
                                Scrum: 12.0,
                              },
                            },
                          },
                          score: 1.0,
                        },
                      ],
                    },
                    {
                      "@type": "concrete",
                      id: "role",
                      input: {
                        criteria: {
                          role: "nodejs",
                        },
                        opportunity: {
                          role: "Backend Engineer - Nodejs",
                        },
                      },
                      score: 0.83,
                    },
                  ],
                },
                {
                  "@type": "concrete",
                  id: "compensationrange",
                  input: {
                    criteria: {
                      compensation: {
                        start: {
                          amount: 21.0,
                          currency: "USD$",
                          minimumHourly: 21.0,
                          periodicity: "hourly",
                        },
                        end: {
                          amount: 40.0,
                          currency: "USD$",
                          minimumHourly: 40.0,
                          periodicity: "hourly",
                        },
                      },
                    },
                    opportunity: {
                      compensation: {
                        minAmount: 70000.0,
                        maxAmount: 90000.0,
                        currency: "USD$",
                        maxHourly: 46.875,
                        periodicity: "yearly",
                      },
                    },
                  },
                  score: 0.828125,
                },
              ],
            },
            {
              "@type": "concrete",
              id: "completion",
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.6875,
                },
              },
              score: 0.6875,
            },
          ],
        },
        filter: {
          "@type": "and",
          pass: true,
          and: [
            {
              "@type": "or",
              pass: true,
              or: [
                {
                  "@type": "and",
                  pass: false,
                  and: [
                    {
                      "@type": "concrete",
                      pass: false,
                      id: "skill",
                      input: {
                        criteria: {
                          skills: ["nodejs"],
                        },
                        opportunity: {
                          skills: ["Back end development", "Node.js", "Scrum"],
                        },
                      },
                    },
                    {
                      "@type": "concrete",
                      pass: true,
                      id: "experience",
                      input: {
                        criteria: {
                          experiences: {
                            nodejs: 0.0,
                          },
                        },
                        opportunity: {
                          experiences: {
                            "Back end development": 12.0,
                            "Node.js": 12.0,
                            Scrum: 12.0,
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  "@type": "concrete",
                  pass: true,
                  id: "role",
                  input: {
                    criteria: {
                      role: "nodejs",
                    },
                    opportunity: {
                      role: "Backend Engineer - Nodejs",
                    },
                  },
                },
              ],
            },
            {
              "@type": "concrete",
              pass: true,
              id: "compensationrange",
              input: {
                criteria: {
                  compensation: {
                    start: {
                      amount: 21.0,
                      currency: "USD$",
                      minimumHourly: 21.0,
                      periodicity: "hourly",
                    },
                    end: {
                      amount: 40.0,
                      currency: "USD$",
                      minimumHourly: 40.0,
                      periodicity: "hourly",
                    },
                  },
                },
                opportunity: {
                  compensation: {
                    minAmount: 70000.0,
                    maxAmount: 90000.0,
                    currency: "USD$",
                    maxHourly: 46.875,
                    periodicity: "yearly",
                  },
                },
              },
            },
            {
              "@type": "concrete",
              pass: true,
              id: "status",
              input: {
                criteria: {
                  status: "open",
                },
                opportunity: {
                  status: "open",
                },
              },
            },
            {
              "@type": "concrete",
              pass: true,
              id: "location",
              input: {
                criteria: {
                  location: "Spain",
                },
                opportunity: {
                  location: [],
                },
              },
            },
          ],
        },
        boosters: ["internal"],
      },
    },
  ],
  size: 1,
  total: 1,
};

module.exports = {
  jobMock,
};
