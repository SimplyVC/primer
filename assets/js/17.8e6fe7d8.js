(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{438:function(s,t,e){"use strict";e.r(t);var a=e(53),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"create-a-poll-post"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-poll-post"}},[s._v("#")]),s._v(" Create a poll post")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Rewards")]),s._v(" "),e("p",[s._v("Upon completing this challenge, you will be rewarded "),e("strong",[s._v("100 Desmos Tokens")]),s._v(".")]),s._v(" "),e("p",[s._v("Please note that in order to prevent spam, you will receive the reward just "),e("strong",[s._v("for the first poll post")]),s._v(" you create. No tokens will be awarded for later posts.")])]),s._v(" "),e("p",[s._v("With version "),e("code",[s._v("v0.3.0")]),s._v(" we've implemented the possibility for users to create poll posts, which allow to easily know what other Desmos users think about a specific question.")]),s._v(" "),e("h2",{attrs:{id:"creating-your-first-poll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-poll"}},[s._v("#")]),s._v(" Creating your first poll")]),s._v(" "),e("p",[s._v("After you've followed the "),e("RouterLink",{attrs:{to:"/setup/"}},[s._v("setup")]),s._v(" and you've created your Desmos account using the "),e("code",[s._v("desmoscli keys")]),s._v(" command, you are ready to create your first poll posts. To do so, run the following command:")],1),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli tx posts create "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<Subspace>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<Message>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-details "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"question=<Question>,mutiple-answers=<true/false>,allows-answer-edits=<true/false>,end-date=<Poll ending date>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-answer "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("First answer"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-answer "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Second answer"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  --from "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("Before seeing an example of such command, let's see what all the different parts of it do:")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("<Subspace>")]),s._v(": allows to specify which application should show this poll. It must be a SHA256 hash."),e("br"),s._v("\nWe suggest you using "),e("code",[s._v("4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e")]),s._v(" (SHA256 hash of "),e("code",[s._v("desmos")]),s._v(") as its value. Otherwise, you can create your own using any "),e("a",{attrs:{href:"https://emn178.github.io/online-tools/sha256.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("online SHA256 hashing tool"),e("OutboundLink")],1),s._v(".")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("--poll-details")]),s._v(" allows you to specify the details of the polls. It must contain the following data:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("question")]),s._v(": the question of the poll")]),s._v(" "),e("li",[e("code",[s._v("date")]),s._v(": the end date of your poll after which no further answers will be accepted, in "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc3339",target:"_blank",rel:"noopener noreferrer"}},[s._v("RFC3339 format"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("li",[e("code",[s._v("multiple-answers")]),s._v(": a boolean indicating the possibility of multiple answers from users")]),s._v(" "),e("li",[e("code",[s._v("allows-answers-edits")]),s._v(": a boolean value that indicates the possibility to edit the answers in the future")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("--poll-answer")]),s._v(", which indicates a provided answer of the poll."),e("br"),s._v("\nEach answer should be provided using the "),e("code",[s._v("--poll-answer")]),s._v(" command.")])])]),s._v(" "),e("p",[s._v("Here's an example of such command:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli tx posts create "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Post with poll"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-details "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"question=Which dog do you prefer?,multiple-answers=false,allows-answer-edits=true,end-date=2020-03-01T15:00:00.000Z"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-answer "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Beagle"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-answer "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pug"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --poll-answer "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"German Sheperd"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from jack --yes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-3000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Know more about posts")]),s._v(" "),e("p",[s._v("If you want to know more about posts and how they are composed of, including the poll data, please refer to the "),e("a",{attrs:{href:"https://docs.desmos.network/types/post.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("official Desmos documentation"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this:")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0AC2DE8ABBBA27AC2C1C83E2D3070B426E3D8BB67589C8C4A6804A31516F4AA9\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[]'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("To make sure the transaction has been processed successfully, you can query it using the following command:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli query tx "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --trust-node --output json\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli query tx 0AC2DE8ABBBA27AC2C1C83E2D3070B426E3D8BB67589C8C4A6804A31516F4AA9 --trust-node --output json")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("This will return you the JSON representation of the transaction itself.")]),s._v(" "),e("h2",{attrs:{id:"getting-the-reward"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-reward"}},[s._v("#")]),s._v(" Getting the reward")]),s._v(" "),e("p",[s._v("After you've created a poll, to make sure you receive your reward please following this procedure:")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Create a fork of this repo inside your private GitHub profile."),e("br"),s._v("\nIf you do not know how to do it, follow the "),e("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub fork guide"),e("OutboundLink")],1),s._v(".")])]),s._v(" "),e("li",[e("p",[s._v("Pull the fork locally:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/primer.git ~/desmos-primer\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/desmos-primer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Make sure your fork is up to date with the Primer repository:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream https://github.com/desmos-labs/primer.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase upstream/master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Create a file named after your GitHub username containing the post creation transaction hash:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phase-3/challenges/polls/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "0AC2DE8ABBBA27AC2C1C83E2D3070B426E3D8BB67589C8C4A6804A31516F4AA9" >> ./phase-3/challenges/polls/RiccardoM')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the "),e("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests guide"),e("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);