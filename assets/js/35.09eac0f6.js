(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{456:function(t,e,a){"use strict";a.r(e);var r=a(53),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"desmos-validator-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desmos-validator-program"}},[t._v("#")]),t._v(" Desmos Validator program")]),t._v(" "),a("p",[t._v("The time has come. We are now inviting validators to join our public testnets.")]),t._v(" "),a("p",[t._v("If you feel ready to take the challenge and help us making the Desmos chain safer and more distributed, read below to know how to do it.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Validator rewards")]),t._v(" "),a("p",[t._v("In order to get the validator program running longer and include a larger number of validators, we will periodically revisit the number of tokens that will be rewarded upon becoming a validator of our chains.")]),t._v(" "),a("p",[t._v("Also, we will reward tokens based on the activity of validators: more blocks you precommit and more reward you will get, so make sure your validator node is always active to get the larger amount of tokens possible.")]),t._v(" "),a("p",[t._v("Currently the reward for becoming a validator is set to be "),a("strong",[t._v("50 Desmos Tokens + periodic rewards based on the availability of the node")]),t._v(" (see below).")]),t._v(" "),a("p",[t._v("Please note that in order to prevent scams, you will receive the initial reward just after your validator has "),a("strong",[t._v("successfully proposed a block")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"procedure-to-become-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-to-become-a-validator"}},[t._v("#")]),t._v(" Procedure to become a validator")]),t._v(" "),a("p",[t._v("The procedure to become a validator is composed of two parts:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First thing first, you are required to setup a full node of your server machine. To do so, please follow the "),a("a",{attrs:{href:"https://docs.desmos.network/testnets/join-public.html#validators",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),a("em",[t._v("Setting up a node")]),t._v('" guide on the Desmos documentation website'),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Once you have properly set up a full node, you can upgrade its functionality making it a validator node. To read how to do this, please refer to the "),a("a",{attrs:{href:"https://docs.desmos.network/validators/setup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),a("em",[t._v("Run a validator on Desmos")]),t._v('" guide on the Desmos documentation website'),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Testnet version and data")]),t._v(" "),a("p",[t._v("Please note that new validators must rely on the latest testnet running. Such testnet's "),a("code",[t._v("genesis.json")]),t._v(" file and seeds information can be found inside the "),a("a",{attrs:{href:"https://github.com/desmos-labs/morpheus",target:"_blank",rel:"noopener noreferrer"}},[t._v("root directory of the testnet repo"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"about-periodic-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-periodic-rewards"}},[t._v("#")]),t._v(" About periodic rewards")]),t._v(" "),a("p",[t._v("In order to prevent an over-accumulation in the hands of few validators, during each Phase of the Primer program we will review the rules and quantity of the tokens that will be allocated to validators.")]),t._v(" "),a("h3",{attrs:{id:"phase-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-3"}},[t._v("#")]),t._v(" Phase 3")]),t._v(" "),a("p",[t._v("During "),a("strong",[t._v("Phase 3")]),t._v(" we have decided to allow for a maximum of "),a("strong",[t._v("250 Desmos Tokens")]),t._v(" to be distributed to each validator, based on the "),a("strong",[t._v("number of pre-commits")]),t._v(" their node will sign.")]),t._v(" "),a("p",[t._v("Such Phase has been running for 31 days. Considering an average block time of 5.70 seconds, this means that each validator should have signed approximately 469,894 pre-commits during that period of time. To incentivize validators to run their node through the whole Phase 3, we decided to adopt a logarithmic token distribution:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Pre-commits signed")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Tokens rewarded")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("78")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("331")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1,416")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("21")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6,044")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("40")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("25,796")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("73")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("110,097")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("135")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("469,894")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("250")])])])]),t._v(" "),a("h3",{attrs:{id:"phase-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-4"}},[t._v("#")]),t._v(" Phase 4")]),t._v(" "),a("p",[t._v("Inside Phase 4, we've decided to "),a("strong",[t._v("increment")]),t._v(" the reward that each validator can obtain to a "),a("strong",[t._v("maximum of 6,000 DSM")]),t._v(" per validator.")]),t._v(" "),a("p",[t._v("During this phase, our validators have signed "),a("code",[t._v("563,623")]),t._v(" blocks:")]),t._v(" "),a("ul",[a("li",[t._v("380,000 of which have been part of "),a("code",[t._v("morpheus-4000")]),t._v(" (last block considered: 380,000 - export height)")]),t._v(" "),a("li",[t._v("183,623 of which have been part of "),a("code",[t._v("morpheus-4001")]),t._v(" (last block considered: 183,623 - 31 May 2020, 11:59:57)")])]),t._v(" "),a("p",[t._v("Also, when deciding the blocks number that a validator should have signed in order to get the maximum reward possible we considered two particular things:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Chain start vs Reward counting start."),a("br"),t._v("\nIn order to be ready to accept other validators, we started the chain beforehand."),a("br"),t._v("\nTo fix this mismatch between our validators and third party ones, as previously stated, we started counting the precommits count from the first block after 1st May 2020 00:00 UTC.")])]),t._v(" "),a("li",[a("p",[t._v("Upgrade time."),a("br"),t._v("\nSince there was an upgrade to be done in the middle of the Phase running time, validators needed to be shut off and restarted as the new chain was started. As we stated in "),a("a",{attrs:{href:"https://twitter.com/DesmosNetwork/status/1263052394134491142",target:"_blank",rel:"noopener noreferrer"}},[t._v("our Tweet"),a("OutboundLink")],1),t._v(", we are considering this as well.")])])]),t._v(" "),a("p",[t._v("For these reasons we have decided to lower the required amount of precommitted blocks by "),a("code",[t._v("140,263")]),t._v(".")]),t._v(" "),a("p",[t._v("This leads to validators having signed at least "),a("code",[t._v("423,360")]),t._v(" precommits to be eligible for the maximum validators program reward amount ("),a("code",[t._v("6,000 DSM")]),t._v(").")]),t._v(" "),a("p",[t._v("That being said, the amount of Phase 4 rewards for the validators program will be:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Pre-commits signed")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Tokens rewarded")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("345,600")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("353,480")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,750")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("361,540")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2,040")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("369,790")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2,380")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("378,220")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2,780")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("386,850")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3,240")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("395,670")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3,780")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("404,690")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4,410")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("413,920")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5,140")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("423,360")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6,000")])])])]),t._v(" "),a("h3",{attrs:{id:"phase-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-5"}},[t._v("#")]),t._v(" Phase 5")]),t._v(" "),a("p",[t._v("During Phase 5, we've decided to keep the same required amount of blocks as well as the same rewards as Phase 4.")]),t._v(" "),a("p",[t._v("Phase 5 started on July 10 at 11:00 UTC. The first block produced after that time was at height "),a("code",[t._v("16,650")]),t._v("."),a("br"),t._v("\nIn order to allow all validators to update their node properly, we started counting the precommits from July 11 at 11:00 UTC (24 hours update time). The first block produced after that date was block "),a("code",[t._v("32,588")]),t._v("."),a("br"),t._v("\nPhase 5 ended on August 15 at 23:59 UTC. The last block produced before that date was block "),a("code",[t._v("629,598")]),t._v("."),a("br"),t._v("\nThis means that during Phase 5 the overall number of produced blocks that should have been signed was "),a("code",[t._v("597,010")]),t._v(", with the 80% being "),a("code",[t._v("477,608")]),t._v(".")]),t._v(" "),a("p",[t._v("This means that the amount of Phase 4 rewards for the validators program will be:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Pre-commits signed")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Tokens rewarded")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("477,608")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("489,598")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,750")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("501,888")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2,040")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("514,487")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2,380")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("527,403")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2,780")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("540,643")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3,240")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("554,215")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3,780")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("568,128")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4,410")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("582,390")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5,140")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("597,010")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6,000")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);