import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div className="container-services">
        <div className="rounde-Img-text2">
          <div className="rounded-img">
            <p className="leatest-paragraph">Services</p>
          </div>
        </div>
        <h2 className="solutions-text">Creative Development Solutions</h2>
        <div className="card-group">
          <div className="card">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <a href="">Web & App Development</a>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Hospital & School Management</p>
            </div>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Food Delivery</p>
            </div>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Gaming Solution</p>
            </div>
          </div>
          <div className="card">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABXCAYAAABMWrgKAAAAAXNSR0IArs4c6QAADnFJREFUeF7tXGeYU1Ua/oZkJjPJzCShDEWUoiKsXbDgKiqIyoOK7rqIura1rBUQlCbYQJqCgHUta1sVWXcVlR0VQUVXLGB3QVCKImUoSWYmbdJ83hNPOLm5N/fcguyPnF/zTE75znu+8/VzyzKZTIZ02pdftNB9s4LU0pLfsWs3J40Z6yOfv1XBDJh1w4YkLXw5TCtXxCmV2t2lrIyoUycH7X9AOX3+WZyamzN09TW1dNLJlQXzvPdujB59pJGqq8voyKNc9MP3Cdq8OUUi1Q4HUe8+Lhpyroe6dnUS5le2YCBNM2cEacP6ZN5PFRVEN4320eFHVOjBQGUyYIEwEP3s000UjWax3XdfJ113Qy116erMWwR9v1+boOf+0UxrvkvkfgNRfY+vpBP6VVGPHuVUXk5swy8810yvvxahmpoyuu4GLx12eAXbLH776ssWeuiBEDU1ZejMs9x0wUXV7LdEgmjNmgR9sCxKyz+M5R1ij4PK6aI/V9MBB5YXgLZxQ5IeeqCRfvopC1hVVRldfGkNOyQ1gJXoSYHFB4HInzclqcJVRu3bOwgnKradO9MM0E8/iedOHtw39PxqOvSwioL+GAsumTYlQBiL5ve3osrKMorFMhQIZP/Xpk0rGj/Rz7hR2cCxX3/VQgtebM5xDTZ+9DEuBgTGig39t21LUUs8Q/t0drJDk22GwNKaFAS8vThKC+Y35ziv2Akr58GJz5sToi1bhLv6a6eOHR00fKS3gIOVc6hxNDhn6LBqOnVglepByYLE+1kGKxRK02N/a6TPVmYFmtfbii6/ooadrAxrc0LicWLya8WnMVq/Lkndujupz9GVTE65XPLbAmjg7CefaCLQhnZU7wq66q+1jDYrzRJYuPtzZu3miL7Hu+iSy2osE2VlQ3wsgHrmqSZa/mGc/QscOnK0l8las800WKtWJej+uSGCloHwhnzoP6DKEDeZJVp2HLhs6ZIok6PQ5NDaN47wUq9eBgSVsJgpsCBQH5iX1VJWCQAt8XiGHn6wkT75OMsFYjvmWBdde30tuVwq9oAkauLBQuveMNzLFI7RZhgs2CmwV8BR0DQ3j/VRly7mWRsEf/ttgmZOCzCTQNmgrcaM99PBB5vjBj7fxo1JundGkGldHDDsQ2hqI80QWLt2pumeGUHCwnYBBU36xGON9O47MWYauD2tmJ0GOykSTjPT4uRTKumKq2otazQRMBzwLWN91FphWhQDTxosGKMP3h9iWs/syagRgg1MnRxgV3rYhdW0fXuKliyO0oCBVdSunYPmP9/MDNYJk/yWORjrizcDWvL6G73MOJVpUmBBUL44v5lefSXChPnwkT6mjq020YLHAUyc5Kf6+kgOrEGD3DRlcoBdedGCt7ouDnzenKz7dvY5bjp/WNYz0GtSYK36X4JmTAuwyS++tJrOGOSWmlxv8R070jR1SoC2btl91Z56sikH1mWX1+SuaIeODpow0U9t21qzlUATDumN+gg9+3QzO/yx4/3U63f6MlEXrHA4Q7PvCRI0ilG21QPrnaUxZtCKQvyJx3eDdcWVNXnCH4blKf0LnW29ddR+F8UKTIlRt/jI4ynOXrpgvVEfZcadnXIKxINYHAI0ITQdiIXsUIKl1c8MQMoxovyCMX3GoKqi0xYFS7wmQ4d5aMg5Hluun2guJJOUF55RgoW+PEzjdNpjRnBEcB0XvhKmBfPDJHPNi4L16sII00b7dXHSmHE+at3aurwAoaK5AFtn3AQ/1dZmr4AaWI2NGZo+NcA0mV1mBAds1640zZwepB83Jpk2PnuIW5O7NMESCbRTVoCSzT+nclpOSaAaWBjDD45rzU77FIZrzF5NLjuVB6ecTxMseO5zZoeofQf7tBBfvNjGtcAqBrBZkPg4Lm62bU3RyFFeFjFRa6pgwe2A7wfA7LRvQIDeldICq9jVtQqWaO8BKPiOakFBVbD4KcaiGZow0cdcD7sa51gtYa0FllIpFOMAM7TCxZo6JUiVVWXMOFa75qpgLXsvRo881Eg9e5XTzWN85HZLmLcSFCK6MPe+EH3xeUueuSAOLQaWaEYccWQFjbjJaykaIa4biWTo3plBWr0qQddcV0v9Tiq05wrAArsjm/L+shidNcRNF1xYLQGDXBceXYC5oMUZxcDCKnqcKUeJeq8Xnm+m1xZG6MR+lcycUeYYCsBCWgpqGqFdmAsyKSIZAmVljh5YejJPhhatPkj5wYxASBvmDNJvYisAi0cByiuydxfGmh1NVpvpgbUnzQj4qHDcEy0Z1ShHAVjI1U2fGrRdXsnaSTJgyQJv9JBFuTVugo/lMPM4KxJJZ9auSVAymU2erlzZQu8siRJSWYPPdLN7W1fnpH06O0y7OjJXB+r7xx+TLOmKAwOhSKrut19hhln2SsuAhXV/3pSihoYk8ywWvR5hyeFTBlRR71/DUE5nGR3Yo5zK6v8TycBRLtYQwZx0h9901kZPKCPp+ejDjSyyoWyICFx9bS1L6opNRlnIgIUs0OQ7AiwiW6zB0c6BBQ5q09ZBDsH9C4fTzIi0ApZo4KoZfGKoGsSqZaTVQsB688oAhT4iWPBPPZ7dAKTSRDt3pBjH5YGlBggPz1gBa90PSRbgg42kNBfE66RX66DmQHOORWgHgcHu+xtLQCjBUoZpRCD3OFiiG6HmpHLtE9iV1q2i8bfOhp1F7SzKQrNumRIQMab1m4IlxsPUwh+QUdPvDpDf76CJt/mpbbvCENCO7WmacleAAoEUjbvVX5Ag5VpWJh6ldjX/b8ASo6xq/tY3X7fQtLuDLLWupUD4ZlA0Mv5WHx1yaL46F80ImWinEjBTYCFOBNdGjENzM8KszNLTgvwaRsLaDjt3cN0edSPZqlYUwRLNBYCK/ANcIGSX8mTWnjAd9OwrUaOpJUPEpIKaJrXD3jJkOgR2pTKPP9ZEWzZnq+G4uYAUUes2DkIoZfBgD/WTrI5Tgq5nua9dm6AZU4ME6xmG8Flnu6lbt3Javz5Br72aNRAR9Rg7wUcHKkJFdljyUELL3o3RokVhgoO/a2eKpfxEM6JjJyddeVVNYZnkxx/FWRgFhRM3jfayKjwrTU/Ig9jPVsZZ+SIvwRTXg1mAcsyjehfWe1kV7sp9odrwvlkhVkmI8M+xx+VHTAt8Qy4jamtbaWooI+CJ5kOxxMfWrSmqXxShD96PMdAA0gknVtKgwW7q0KHQmRcTDWbNBuU+uOZtbEyrBj0LwIIwu+vOALNc1VS1EaB4X26Y4qrZlfzgSQZcUbMGqXIv3JSBJ3Pb7f6CKuwCsCB0USGM6/inoR46948eM/jkjcGcDz8Yoo+WxzUjpEYWESOmx/VF/ZZ6zNzInOj78r/C9M8FYXb9UDmtjMOrhpW5fWRn6JareBBltd7Kzrk4oGLIW8teUwWLXxs413aV+ojcYCVRKpoLYtrfKBcp+/OgJ+bXutaqYIkb08vSGiGSyxm1CIfsPGIkwC75h7W5Zi12AJpJVtksrewm0a+hIUVT7gwQzAmrDaVHE2/3U12d9bC3bPZdEywxS4sKXwhSq40nBFBMi2L+ujrjtRMNDWn2OAEyxq6EChQPKq/1su+aYIn2kWz9UjEw7ZI1dsk+TqtYf6ZnrxWtouHuRCiYJlThDTy9eP1SMbD0LHkjXGun5b74zSih2tDry8bLihWcFAVLrCWta++gWyf5qZ1KzElmozwCIUOU3nziIVpJ42/fnqa7JweoYVtKqrZUt/JPdCuQ0oYGUmZq9TYnZrmLFV7ozcN/F6MVWtljvblAE0o0UaogW3+mCxYW5QIQf19yaQ2ddoaxZyfc54I2VCYF9Dal9TuPjkAbakVZtcbixrz1RpSeeTqb1ZJVYFJg4RSQLlv8VtRUbemmn1KM3fkrLbMAqY3DSy+Ih877ypsQYi3pwNOqWGBP5rZIgQUixZSV0RdWOEk814U3b3dDdATPh2Xq2LG2+JLN6CsLabCwkHgiRheyGyQz84kHbqb62hBYIFB8nQDAUJJtVkOa2bDZMdB8KCWHD2j2lYhhsHCl8ODx0UdCLPxq9Eqa3ayVceLVA1BXX+MlPCSVvbp8bcNgYaASMGU22crG7ByrfMFvBSjQZQosviHxkSa0CR4V4NsKRl602wmOOBdsMXxTAo8CoM2tPMq0xFkiUcj9zZsbyn0mAG+Q/3JlDcvUGGVzO4ADNyEj9PfHm3Lfb0DpwPARXsuFeZY4i28Ozu3zzzXT0rej7IoCpON/X0nnX1Ct+4oL/detS1IoqF3y4/U5qHt39S+BiADD/3zxhWb68L+xHB39T62iCy+qln5TWOzAbAGLyzFU+iJ+zz9ogat5XN9K+sN5HpahUeM0GYO1mOEJsJEZ+vdLYfpoeSz3GRe8tEUcHRXXdnG4bWDxE8H3GZYuidBLC8J5eUBcT7zO73OMi70B4hsQX7JqnaryJSsAgs+64pM4e13PP5eC8UihnTfUQ/0HuA19D0JGBNgOFl8UcSI8gHyzPsI+zCM2+Ico8DjkUBdzM/ApAYCnjPdzIAEOPoUAQf3N13FCQQmim2JDZfHpg9zs4ajeu0EZYNT67DGw+GLY4LfftDDNtHp1Iu/rRCJBau+g9bgOAPfsWc408MGHqH/rxiwwewUscVEoAhT7rvg0Tl9+ESdY1bzJggVv4fAjXNTnaBcripV9DG4HaHucs4oRCa77bnWC5swO6l7DkaN8dFDPcqnogB3A7HXOUiNAlEsjRvmoc+fdoZZNm1I0VwPIPQXIb2I6mCVeTy5hXju/62CWTozbq9cQBKAQZfasEPtKiFbDE75Ro72qn8uzsnmjY/c6WEYJ3pv9S2AZQL8EVgksAwgY6FrirBJYBhAw0LXEWSWwDCBgoGuJs0pgGUDAQNcSZ5XAMoCAga4lziqBZQABA11LnFUCywACBrqWOKsElgEEDHQtcZYBsH4BowZkjFCAE0IAAAAASUVORK5CYII="
              alt=""
            />
            <a href="">E-commerce Solutions</a>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>B2C/B2B E-commerce web Apps</p>
            </div>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Online Market Places</p>
            </div>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Headless Commerce</p>
            </div>
          </div>
          <div className="card">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <a href="">Influencer's Portfolio</a>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Bloggers</p>
            </div>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Artists</p>
            </div>
            <div className="main-arro-text-services">
              <span className="arroicon">
                <AiOutlineArrowRight />
              </span>
              <p>Content Creators</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
