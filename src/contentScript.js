const check = new MutationObserver(() => {
    if (document.body) {
        check.disconnect()
        document
            .documentElement
            .classList.add('sjbdm')
        document.body.insertAdjacentHTML('afterbegin', `
            <style>
                html.sjbdm, .sjbdm body, .sjbdm #hnmain {
                    background: #161616;
                }
                .sjbdm .pagetop a:visited, .hnmore a:link, a:visited  {
                    color: #878787;
                }
                .sjbdm td {
                    color: #bbb;
                }
                .sjbdm .hnname a, .sjbdm #karma {
                    color: #ff6600;
                }
                .sjbdm a:link, .sjbdm body, .sjbdm table, .sjbdm .pagetop {
                    color: #bbb;
                }
                .sjbdm .sitestr, .sjbdm .subline, .sjbdm .subline a {
                    color: #828282;
                }
                .sjbdm .c00, .sjbdm .c00 a:link {
                    color: #b1b1b1;
                }
                .sjbdm #hnmain > tbody > tr:first-child > td:first-child {
                    background: black;
                }
                .sjbdm textarea, .sjbdm input, .sjbdm select {
                    background: #2c2c2c;
                    color: white;
                    border: 0;
                }
            </style>
        `)
    }
})
check.observe(document.documentElement, { childList: true })