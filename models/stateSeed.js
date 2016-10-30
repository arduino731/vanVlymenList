var mongoose    = require("mongoose");
var states      = require("./state");

// var data = [
//     {
//         name: "Cloud's Rest", 
//         image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Desert Mesa", 
//         image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Canyon Floor", 
//         image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     }
// ]

var data = 
[
  {
    "state": "Alabama",
    "abbreviation": "AL",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/bEezEEq.jpg",
      "image_state": "http://imgur.com/81AM2UX.jpg",
      "location": "Monte Sano State Park",
      "credit": {
        "author": "Wes Thomas (BamaWester on Flickr)",
        "url": "http://www.flickr.com/photos/bamawester/3493269235/"
      }
    }
  },
  {
    "state": "Alaska",
    "abbreviation": "AK",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/OHQZ8Sl.jpg",
      "image_state": "http://imgur.com/hXdaJ90.jpg",
      "location": "Mount McKinley/Denali",
      "credit": {
        "author": "bimiers2 on Flickr",
        "url": "http://www.flickr.com/photos/blmiers2/6167391543/"
      }
    }
  },
  {
    "state": "Arizona",
    "abbreviation": "AZ",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/bobKqJk.jpg",
      "image_state": "http://imgur.com/qYaT97s.jpg",
      "location": "Horseshoe Bend, Colorado River",
      "credit": {
        "author": "Luca Galuzzi",
        "url": "http://commons.wikimedia.org/wiki/File:USA_10187_Horseshoe_Bend_Luca_Galuzzi_2007.jpg"
      }
    }
  },
  {
    "state": "Arkansas",
    "abbreviation": "AR",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/mpnRzXh.jpg",
      "image_state": "http://imgur.com/pq2Lcks.jpg",
      "location": "Hawksbill Crag/Whitaker Point, Ozark Mountains",
      "credit": {
        "author": "Jeff Rose/Jeka World Photography",
        "url": "http://www.flickr.com/photos/jekaphotography/7162348533/"
      }
    }
  },
  {
    "state": "California",
    "abbreviation": "CA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/22rsn6i.jpg",
      "image_state": "http://imgur.com/u9jsFal.jpg",
      "location": "Yosemite National Park",
      "credit": {
        "author": "David Kingham",
        "url": "http://500px.com/photo/3891531"
      }
    }
  },
  {
    "state": "Colorado",
    "abbreviation": "CO",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/jjQqWun.jpg",
      "image_state": "http://imgur.com/wgg3p3D.jpg",
      "location": "Maroon Bells, Elk Mountains",
      "credit": {
        "author": "Alistair Nicol",
        "url": "http://500px.com/photo/19965939"
      }
    }
  },
  {
    "state": "Connecticut",
    "abbreviation": "CT",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/0Gi50IJ.jpg",
      "image_state": "http://imgur.com/sNBuIad.jpg",
      "location": "Youngâ€™s Pond, Branford",
      "credit": {
        "author": "slack12 on Flickr",
        "url": "http://www.flickr.com/photos/slack12/2969846449/"
      }
    }
  },
  {
    "state": "Delaware",
    "abbreviation": "DE",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/n70pj3P.jpg",
      "image_state": "http://imgur.com/BooURmk.jpg",
      "location": "Port Mahon",
      "credit": {
        "author": "Jeffrey on Flickr",
        "url": "http://www.flickr.com/photos/jb912/7681131130/"
      }
    }
  },
  {
    "state": "District Of Columbia",
    "abbreviation": "DC",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/ZeWBnHv.jpg",
      "image_state": "http://imgur.com/hAgVcjX.jpg",
      "location": "Monumental Core",
      "credit": {
        "author": "Michael Huey",
        "url": "http://www.flickr.com/photos/masteryofmaps/2365798918/"
      }
    }
  },
  {
    "state": "Florida",
    "abbreviation": "FL",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/BLSzq7i.jpg",
      "image_state": "http://imgur.com/zAcZmMn.jpg",
      "location": "Florida Trail, Big Cypress National Preserve",
      "credit": {
        "author": "Brian Koprowski",
        "url": "http://www.flickr.com/photos/chewbackski/8455214639/"
      }
    }
  },
  {
    "state": "Georgia",
    "abbreviation": "GA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/2BxSxPi.jpg",
      "image_state": "http://imgur.com/6px49aZ.jpg",
      "location": "Wormsloe Historic Site, Savannah",
      "credit": {
        "author": "Trey Ratcliff",
        "url": "http://www.flickr.com/photos/stuckincustoms/4294845720/"
      }
    }
  },
  {
    "state": "Hawaii",
    "abbreviation": "HI",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/WvmJCHM.jpg",
      "image_state": "http://imgur.com/yV2N8Zk.jpg",
      "location": "Waipio Valley, Big Island",
      "credit": {
        "author": "Paul Bica",
        "url": "http://www.flickr.com/photos/dexxus/5499821986/"
      }
    }
  },
  {
    "state": "Idaho",
    "abbreviation": "ID",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/DYei8lK.jpg",
      "image_state": "http://imgur.com/7XmeFXi.jpg",
      "location": "Little Redfish Lake, Sawtooth National Recreation Area",
      "credit": {
        "author": "Charles Knowles",
        "url": "http://www.flickr.com/photos/theknowlesgallery/6269071201/"
      }
    }
  },
  {
    "state": "Illinois",
    "abbreviation": "IL",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/N2gY1PE.jpg",
      "image_state": "http://imgur.com/dSmuB3Y.jpg",
      "location": "North Blackjack Road, Galena",
      "credit": {
        "author": "Ï„Î±Î·jÎµÎµr on Flickr",
        "url": "http://www.flickr.com/photos/tanjeer/7178843225/"
      }
    }
  },
  {
    "state": "Indiana",
    "abbreviation": "IN",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/QrCJwgU.jpg",
      "image_state": "http://imgur.com/wgyn7lh.jpg",
      "location": "Cub Lake, Merry Lea Environmental Center",
      "credit": {
        "author": "David Cornwell",
        "url": "http://www.flickr.com/photos/dave_cornwell/7859255586/"
      }
    }
  },
  {
    "state": "Iowa",
    "abbreviation": "IA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/4UE5t5n.jpg",
      "image_state": "http://imgur.com/mF96B3Q.jpg",
      "location": "Clayton County",
      "credit": {
        "author": "Todd Ehlers",
        "url": "http://www.flickr.com/photos/eklektikos/36411509/"
      }
    }
  },
  {
    "state": "Kansas",
    "abbreviation": "KS",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/OFt4ItF.jpg",
      "image_state": "http://imgur.com/RMmntvu.jpg",
      "location": "Cimarron National Grassland, Morton County",
      "credit": {
        "author": "BlackburnPhoto on Flickr",
        "url": "http://www.flickr.com/photos/dobieks/4321272698/"
      }
    }
  },
  {
    "state": "Kentucky",
    "abbreviation": "KY",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/h5jfkRi.jpg",
      "image_state": "http://imgur.com/WpHv1Hl.jpg",
      "location": "Indian Fort Mountain, Berea",
      "credit": {
        "author": "Jim (code poet on Flickr)",
        "url": "http://www.flickr.com/photos/alphageek/1562780066/"
      }
    }
  },
  {
    "state": "Louisiana",
    "abbreviation": "LA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/4hxLQto.jpg",
      "image_state": "http://imgur.com/QJ3bwDn.jpg",
      "location": "Oak Alley Plantation, Vacherie",
      "credit": {
        "author": "Prayitno on Flickr",
        "url": "http://www.flickr.com/photos/prayitnophotography/7031210389/"
      }
    }
  },
  {
    "state": "Maine",
    "abbreviation": "ME",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/ArcCOks.jpg",
      "image_state": "http://imgur.com/DioKSRQ.jpg",
      "location": "Portland Head Light, Cape Elizabeth",
      "credit": {
        "author": "Kay Gaensler",
        "url": "http://www.flickr.com/photos/gaensler/5203739827/"
      }
    }
  },
  {
    "state": "Maryland",
    "abbreviation": "MD",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/4RRu5Yj.jpg",
      "image_state": "http://imgur.com/wgkIPqr.jpg",
      "location": "Route 40 â€“ Exit 52, East of Cumberland",
      "credit": {
        "author": "Nancy Frost",
        "url": "http://www.flickr.com/photos/javcon117/6224556383/"
      }
    }
  },
  {
    "state": "Massachusetts",
    "abbreviation": "MA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/IR2kCeb.jpg",
      "image_state": "http://imgur.com/UgfsWwq.jpg",
      "location": "Houghtonville, North Adams",
      "credit": {
        "author": "Kae Gaensler",
        "url": "http://www.flickr.com/photos/gaensler/5197931483/"
      }
    }
  },
  {
    "state": "Michigan",
    "abbreviation": "MI",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/vAHCikM.jpg",
      "image_state": "http://imgur.com/l2AnsUR.jpg",
      "location": "Lake of the Clouds, Porcupine Mountains Wilderness State Park",
      "credit": {
        "author": "James Marvin Phelps",
        "url": "http://www.flickr.com/photos/mandj98/1085868030/"
      }
    }
  },
  {
    "state": "Minnesota",
    "abbreviation": "MN",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/PiAPwGv.jpg",
      "image_state": "http://imgur.com/5d6pWIn.jpg",
      "location": "Minnehaha Falls, Minneapolis",
      "credit": {
        "author": "Todd Kehrberg",
        "url": "http://www.flickr.com/photos/tkehrberg/7271823370/"
      }
    }
  },
  {
    "state": "Mississippi",
    "abbreviation": "MS",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/ZMdAEmd.jpg",
      "image_state": "http://imgur.com/9XsIMEA.jpg",
      "location": "Sam D. Hamilton Noxubee National Wildlife Refuge",
      "credit": {
        "author": "Roger Smith",
        "url": "http://www.flickr.com/photos/rogersmith/2702785760/"
      }
    }
  },
  {
    "state": "Missouri",
    "abbreviation": "MO",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/IRwBDqd.jpg",
      "image_state": "http://imgur.com/Ri4NRCS.jpg",
      "location": "Lake Taneycomo, Table Rock",
      "credit": {
        "author": "Drew Bandy",
        "url": "http://www.flickr.com/photos/drewbandy/5166380422/"
      }
    }
  },
  {
    "state": "Montana",
    "abbreviation": "MT",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/XPNAPWC.jpg",
      "image_state": "http://imgur.com/mtNUn2c.jpg",
      "location": "Glacier National Park",
      "credit": {
        "author": "Trey Ratcliff",
        "url": "http://www.flickr.com/photos/stuckincustoms/2746960560/"
      }
    }
  },
  {
    "state": "Nebraska",
    "abbreviation": "NE",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/CTCyde1.jpg",
      "image_state": "http://imgur.com/I9EFw3I.jpg",
      "location": "Ashfall Fossil Beds State Historical Park, Royal",
      "credit": {
        "author": "Rich on Flickr",
        "url": "http://www.flickr.com/photos/isnapshot/8867385642/"
      }
    }
  },
  {
    "state": "Nevada",
    "abbreviation": "NV",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/IQuhyik.jpg",
      "image_state": "http://imgur.com/RtZ48Xc.jpg",
      "location": "Valley Of Fire State Park",
      "credit": {
        "author": "James Marvin Phelps",
        "url": "http://www.flickr.com/photos/mandj98/5932469664/"
      }
    }
  },
  {
    "state": "New Hampshire",
    "abbreviation": "NH",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/OowmJim.jpg",
      "image_state": "http://imgur.com/H0BQELf.jpg",
      "location": "White Mountains, Rockywold, Holderness",
      "credit": {
        "author": "Ben Ferenchak",
        "url": "http://www.flickr.com/photos/benfff85/6067580851/"
      }
    }
  },
  {
    "state": "New Jersey",
    "abbreviation": "NJ",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/y69gqzV.jpg",
      "image_state": "http://imgur.com/sCmuCoG.jpg",
      "location": "Silver Spray Falls, Walpack Township, Sussex County",
      "credit": {
        "author": "Nicholas A. Tonelli",
        "url": "http://www.flickr.com/photos/nicholas_t/2708577920/"
      }
    }
  },
  {
    "state": "New Mexico",
    "abbreviation": "NM",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/G7y8XzK.jpg",
      "image_state": "http://imgur.com/rojGEHx.jpg",
      "location": "Manzano Mountains, Southeast of Albuquerque",
      "credit": {
        "author": "Doug Aghassi",
        "url": "http://www.flickr.com/photos/dougitdesign/2718938320/"
      }
    }
  },
  {
    "state": "New York",
    "abbreviation": "NY",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/ag4x1PJ.jpg",
      "image_state": "http://imgur.com/m0GlSO4.jpg",
      "location": "Central Park, New York City",
      "credit": {
        "author": "Christopher Schoenbohm",
        "url": "http://www.flickr.com/photos/chrisschoenbohm/6288866486/"
      }
    }
  },
  {
    "state": "North Carolina",
    "abbreviation": "NC",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/oLLGiYW.jpg",
      "image_state": "http://imgur.com/NNuZLzW.jpg",
      "location": "Smoky Mountains, Suttontown",
      "credit": {
        "author": "Kay Gaensler",
        "url": "http://www.flickr.com/photos/gaensler/7788058782/"
      }
    }
  },
  {
    "state": "North Dakota",
    "abbreviation": "ND",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/xIbceXW.jpg",
      "image_state": "http://imgur.com/xDIGFee.jpg",
      "location": "Theodore Roosevelt National Park",
      "credit": {
        "author": "the.waterbird on Flickr",
        "url": "http://www.flickr.com/photos/doucettejl/5955699443/"
      }
    }
  },
  {
    "state": "Ohio",
    "abbreviation": "OH",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/uvjWYxX.jpg",
      "image_state": "http://imgur.com/4pyT8W0.jpg",
      "location": "Ash Cave, Hocking Hills State Park",
      "credit": {
        "author": "Bryan Olesen on Flickr",
        "url": "http://www.flickr.com/photos/bryanolesen/319680203/in/set-72157594333249711/"
      }
    }
  },
  {
    "state": "Oklahoma",
    "abbreviation": "OK",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/4btRCg6.jpg",
      "image_state": "http://imgur.com/xQCtg9i.jpg",
      "location": "Wichita Mountains Wildlife Refuge, Lawton",
      "credit": {
        "author": "Daniel James",
        "url": "http://www.flickr.com/photos/revjim/3061730684/"
      }
    }
  },
  {
    "state": "Oregon",
    "abbreviation": "OR",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/ZY8SPoE.jpg",
      "image_state": "http://imgur.com/Kzktse2.jpg",
      "location": "Lower Kentucky Falls",
      "credit": {
        "author": "Loren Kerns",
        "url": "http://www.flickr.com/photos/lorenkerns/8659687313/"
      }
    }
  },
  {
    "state": "Pennsylvania",
    "abbreviation": "PA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/09pAfk9.jpg",
      "image_state": "http://imgur.com/HNHPQem.jpg",
      "location": "Pine Creek Gorge, Tioga County",
      "credit": {
        "author": "Nicholas A. Tonelli",
        "url": "http://www.flickr.com/photos/nicholas_t/3602389004/"
      }
    }
  },
  {
    "state": "Rhode Island",
    "abbreviation": "RI",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/6eAG0TI.jpg",
      "image_state": "http://imgur.com/iMfJpN4.jpg",
      "location": "Portsmouth, Newport County",
      "credit": {
        "author": "RawheaD Rex on Flickr",
        "url": "http://www.flickr.com/photos/rawhead/4625663071/"
      }
    }
  },
  {
    "state": "South Carolina",
    "abbreviation": "SC",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/4TlMIE7.jpg",
      "image_state": "http://imgur.com/nfQuNga.jpg",
      "location": "Landsford Canal State Park",
      "credit": {
        "author": "Ken Fager",
        "url": "http://www.flickr.com/photos/kenfagerdotcom/9117886026/"
      }
    }
  },
  {
    "state": "South Dakota",
    "abbreviation": "SD",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/xgcl4Ob.jpg",
      "image_state": "http://imgur.com/JJyHHME.jpg",
      "location": "Badlands National Park",
      "credit": {
        "author": "Keith Cuddeback",
        "url": "http://www.flickr.com/photos/in2photos/8851975530/"
      }
    }
  },
  {
    "state": "Tennessee",
    "abbreviation": "TN",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/n9DkiAB.jpg",
      "image_state": "http://imgur.com/QIdFxgR.jpg",
      "location": "Mt. Cammerer, Great Smoky Mountains National Park",
      "credit": {
        "author": "Michael Hicks",
        "url": "http://www.flickr.com/photos/mikerhicks/6276617383/"
      }
    }
  },
  {
    "state": "Texas",
    "abbreviation": "TX",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/dEqaelK.jpg",
      "image_state": "http://imgur.com/1hXSRRH.jpg",
      "location": "Hamilton Pool Nature Preserve, Southwest of Austin",
      "credit": {
        "author": "Dave Wilson",
        "url": "http://www.flickr.com/photos/dawilson/2385891927/in/photostream/"
      }
    }
  },
  {
    "state": "Utah",
    "abbreviation": "UT",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/M7kiBjM.jpg",
      "image_state": "http://imgur.com/jOJ1DdW.jpg",
      "location": "Thorâ€™s Hammer, Bryce Canyon National Park",
      "credit": {
        "author": "Luca Galuzzi",
        "url": "http://commons.wikimedia.org/wiki/File:USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg"
      }
    }
  },
  {
    "state": "Vermont",
    "abbreviation": "VT",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/L8kNyNl.jpg",
      "image_state": "http://imgur.com/mtOQ1Tf.jpg",
      "location": "Peacham, Caledonia County",
      "credit": {
        "author": "Susan Cole Kelly",
        "url": "http://www.flickr.com/photos/susancolekelly/8049951568/"
      }
    }
  },
  {
    "state": "Virginia",
    "abbreviation": "VA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/odrEL9z.jpg",
      "image_state": "http://imgur.com/6U4knu9.jpg",
      "location": "Pembroke, Giles County",
      "credit": {
        "author": "Dmitry Lyakhov",
        "url": "http://www.flickr.com/photos/mutbka/19482666/"
      }
    }
  },
  {
    "state": "Washington",
    "abbreviation": "WA",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/Isltmfy.jpg",
      "image_state": "http://imgur.com/hfBlsJT.jpg",
      "location": "Tipsoo Meadow, Pierce County",
      "credit": {
        "author": "Michael Bohlander",
        "url": "http://www.flickr.com/photos/bohlander/2800384628/"
      }
    }
  },
  {
    "state": "West Virginia",
    "abbreviation": "WV",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/L5i7Gtd.jpg",
      "image_state": "http://imgur.com/woKKGzq.jpg",
      "location": "Hawks Nest Bridge, Macdougal",
      "credit": {
        "author": "VaMedia on Flickr",
        "url": "http://www.flickr.com/photos/vamedia/8084791478/"
      }
    }
  },
  {
    "state": "Wisconsin",
    "abbreviation": "WI",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/iQPY2tZ.jpg",
      "image_state": "http://imgur.com/I43GkiJ.jpg",
      "location": "Gibraltar Rock, Okee",
      "credit": {
        "author": "Ron Wiecki",
        "url": "http://www.flickr.com/photos/rwphoto/3361259425/"
      }
    }
  },
  {
    "state": "Wyoming",
    "abbreviation": "WY",
    "capital": "",
    "image": {
      "image_flag": "http://imgur.com/N0sd64F.jpg",
      "image_state": "http://imgur.com/gjLFUES.jpg",
      "location": "John Moulton Barn, Mormon Row, Grand Teton National Park",
      "credit": {
        "author": "Jon Sullivan",
        "url": "http://en.wikipedia.org/wiki/File:Barns_grand_tetons.jpg"
      }
    }
  }
]

// console.log(data);
function seeddb2(){
    states.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("removed name!");
        }
        data.forEach(function(seed){
            states.create(seed, function(err, nameUS){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a state");
                    // console.log(nameUS);
                }
            })
        })
    })    
}

seeddb2();

module.exports = seeddb2;