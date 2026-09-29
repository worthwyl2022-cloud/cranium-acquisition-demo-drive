export const PRECOMPILED_AUDIT_REPORT = {
  "campaignId": "CRANIUM-STRESS-50K-MUIJ3I8Z",
  "timestampIso": "2026-09-26T15:12:38.624Z",
  "totalTestsRun": 50000,
  "overallPassed": true,
  "totalGranted": 5000,
  "totalDenied": 45000,
  "attackDefensesCount": 45000,
  "legitimateGrantsCount": 5000,
  "categoryBreakdown": {
    "IDENTITY_SPOOFING": {
      "total": 7500,
      "granted": 0,
      "denied": 7500
    },
    "EVIDENCE_TAMPERING": {
      "total": 7500,
      "granted": 0,
      "denied": 7500
    },
    "REPLAY_COLLISION": {
      "total": 7500,
      "granted": 0,
      "denied": 7500
    },
    "EPOCH_DESYNC": {
      "total": 7500,
      "granted": 0,
      "denied": 7500
    },
    "ARBITRARY_DEMOTION": {
      "total": 5000,
      "granted": 0,
      "denied": 5000
    },
    "CONSTITUTIONAL_BYPASS": {
      "total": 5000,
      "granted": 0,
      "denied": 5000
    },
    "CANON_NLI_INJECTION": {
      "total": 5000,
      "granted": 0,
      "denied": 5000
    },
    "AUTHORIZED_VALID": {
      "total": 5000,
      "granted": 5000,
      "denied": 0
    }
  },
  "violationsBreakdown": {
    "MISSING_SUBJECT": 7500,
    "INVALID_AUTHORITY_JUMP": 7500,
    "INSUFFICIENT_EVIDENCE": 13144,
    "REPLAY_CONFLICT": 7500,
    "UNAUTHORIZED_REQUESTER": 7500,
    "STALE_AUTHORITY_VERSION": 7500,
    "DEGRADATION_WITHOUT_REASON": 5000,
    "CONSTITUTION_VIOLATION": 5000,
    "CANON_CONTRADICTION_QUARANTINE": 5000
  },
  "throughputOpsSec": 4571.2,
  "totalDurationMs": 10938,
  "masterMerkleRoot": "417e3899b420c5c7df8df1edb64eb1068a99e3505bc335b117d9fb47d5c16ff3",
  "batches": [
    {
      "batchIndex": 0,
      "startIndex": 0,
      "endIndex": 999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "e6e1a3c82dfa4390b629e0a0b0b3ac64914ad7b0347baeaa3304e0088d72db69",
      "durationMs": 337,
      "avgLatencyMicros": 255,
      "p50LatencyMicros": 106,
      "p95LatencyMicros": 605,
      "p99LatencyMicros": 4054,
      "maxLatencyMicros": 14971,
      "samples": [
        {
          "index": 0,
          "testId": "req_spoof_0_89ddd1",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_0",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "95ffcd54d9383ee0aa68ce9511805462a8ab95309769c68a397f13c403fc0493",
          "receiptSignature": "4c7886d700a8266db0728e1d329cba1620758a84cc379362ca7453b067759125",
          "latencyMicros": 9437,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 1,
          "testId": "req_spoof_1_6952ce",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_1",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "290594e1fddf994ec6ef89b007c922fcbf095a5faaf92ef8326f6740f11f6c5c",
          "receiptSignature": "185a279b4c7fef5663df5cbd72cb083625a67c2f78d6c2603ce1a513c1eb56b6",
          "latencyMicros": 605,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 2,
          "testId": "req_spoof_2_d7c27c",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_2",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "6f1d98cd20da04adefd35003f3c33bd49794a5e38acfc16d60ad1f1d02663e2f",
          "receiptSignature": "fcae2d73819932554df7dcedd848eb3079761cddaa66b1284f601f0104cec598",
          "latencyMicros": 340,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 3,
          "testId": "req_spoof_3_24d078",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_642f",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "e0588737bb6f67d4bd3f985fc0149e60adfadb1f0145ee5743599161e3c582b9",
          "receiptSignature": "ba64b28bd7bc1ada55cc64b32fec61deb9f617b04970c7e8b74e8ce390f5256c",
          "latencyMicros": 321,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 4,
          "testId": "req_spoof_4_357255",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_4",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "34a1946506b0dab87ff2627489bc91713b1119f10a1a9f23494bf403033e1877",
          "receiptSignature": "6034d58843e2c7baed86c97e37cc64cd09aa4b55d51dcb89980fa44d2f9acd02",
          "latencyMicros": 295,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 999,
          "testId": "req_spoof_999_680f46",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_8378",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "1aeb56060a24c0f5b158af59a73cab5a3b8bc00f71defec2341c7fadb5532b46",
          "receiptSignature": "b15119d3061981484bba4cd15607a4fc3b6723e2e2be5803cebb4bffb288b659",
          "latencyMicros": 70,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 1,
      "startIndex": 1000,
      "endIndex": 1999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "75d6ee257b28ede4f62abd70c4408518aa75e281ed25ca470ff656e5cbe0d513",
      "durationMs": 351,
      "avgLatencyMicros": 220,
      "p50LatencyMicros": 78,
      "p95LatencyMicros": 254,
      "p99LatencyMicros": 4516,
      "maxLatencyMicros": 18643,
      "samples": [
        {
          "index": 1000,
          "testId": "req_spoof_1000_00e582",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_shadow_1000",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "a2e185b106b7ec44aa9dd78c4967a49b2cfc76f550c3d68f853cc5aa690af8fa",
          "receiptSignature": "cda2c57d5cd7b08b71201833d15256e8a9d6036779a8c9fd526918b54b8a91f8",
          "latencyMicros": 225,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 1001,
          "testId": "req_spoof_1001_8a3717",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "ca77a04bd273430b20a5dc48b231eb2e483f790fc4d87342f8a1e81093bf4328",
          "receiptSignature": "761ade0db69927b3379031d3aaf8f8fb2977634fad9e4c1928efb00f1788b6ac",
          "latencyMicros": 153,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 1002,
          "testId": "req_spoof_1002_0d2c30",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_8811742",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "fe90d5abc5cb0c1d97a0aa00494bdc93c66219a7ff381935d9a5ecae25910482",
          "receiptSignature": "0eadfce1e627ed9aa029db619b608dd141258bb111c8669b69b366fe3302c8f2",
          "latencyMicros": 100,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 1003,
          "testId": "req_spoof_1003_38b661",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_shadow_1003",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "4afee4bf265105cb2cc01fcb1570d77b9a5e18da4e634c89c565dabbc47e0da1",
          "receiptSignature": "c9337f7c6e07f10bd34c31bf9802cf41b1d010b2c117f413584711995361961e",
          "latencyMicros": 81,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 1004,
          "testId": "req_spoof_1004_37df99",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_1004",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "596d3c93e9e1dfdd5d0165cc0c0b7c441f09327b882e394b0af947f7fe797349",
          "receiptSignature": "c4d287ec7f4260bb9d833d951dc916df1c03033d65cecb32e47a50dee3463a8b",
          "latencyMicros": 69,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 1999,
          "testId": "req_spoof_1999_992400",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_db5b",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "ae3644ceb98add332d76f6d5dc337abb9a32ab0342b2a5349d4e14f24d39a109",
          "receiptSignature": "030dbefa6a73985966fe2903a9d26000c19bf9012a056ee7d18bb5fa1370546c",
          "latencyMicros": 67,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 2,
      "startIndex": 2000,
      "endIndex": 2999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "19ca6d8b351712b85c03d857d77f07366f86cb52d602277ea29d5c589b45f14e",
      "durationMs": 432,
      "avgLatencyMicros": 328,
      "p50LatencyMicros": 67,
      "p95LatencyMicros": 608,
      "p99LatencyMicros": 7183,
      "maxLatencyMicros": 38009,
      "samples": [
        {
          "index": 2000,
          "testId": "req_spoof_2000_5c6b0a",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_2000",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "471430be28b2ab45c7acaf4bf288b7228c15513ae853fc6b95989f3a65d9430a",
          "receiptSignature": "b3472b61aa20db606d98e458e78cba3704fcd023e1e2700d5ff5ccdc0c4904cc",
          "latencyMicros": 227,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 2001,
          "testId": "req_spoof_2001_7fcf58",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "ac854b6d22f92f5144418f1e890ab191e1f0f04acfebc874d16aea492b4658f3",
          "receiptSignature": "72b1b2b606824001743bf22cd98aa952276622013930aac6e9f83ea5f88d261a",
          "latencyMicros": 78,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 2002,
          "testId": "req_spoof_2002_35c99b",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_2002",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "b636f891bf577e76df3f945c280a17f774bc196cb4cdb17a39ce4a29705473fb",
          "receiptSignature": "62a3422baddc2fb12ebeac145bc30019198232db52946a24e590b9705eb9f200",
          "latencyMicros": 111,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 2003,
          "testId": "req_spoof_2003_a85b6e",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_2003",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "43ffa6702152f7d8f64470ff3f8eac2fdeef5f693214d5f02423bcd124cf2bd4",
          "receiptSignature": "e1070f081fe812ee28dfe0a3ef394fd9be5cfd8e67de38e26c32294970f4fdb1",
          "latencyMicros": 75,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 2004,
          "testId": "req_spoof_2004_fd284f",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_shadow_2004",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "8b5d9c601b7582f1d94976e3bd7eb33e838386827e34ccca52f1b42e90b4a11c",
          "receiptSignature": "e3a17051da98a09db2b099f6424f7215ea516f37eea098e78237150eae998227",
          "latencyMicros": 67,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 2999,
          "testId": "req_spoof_2999_da7663",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_2999",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "5701aef183daa990ccf8f3dc393f806a1f6940f2d76782ae386722ce871bebf9",
          "receiptSignature": "503ecbfce385d82c562b42b5b2cf9f4fef1563849932a4af199104b70288cde1",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 3,
      "startIndex": 3000,
      "endIndex": 3999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "e8f01c2b398ddfdc6614a2e7dcf8fffa251367c57c5fc46aa1841a5c0d7d191b",
      "durationMs": 173,
      "avgLatencyMicros": 117,
      "p50LatencyMicros": 68,
      "p95LatencyMicros": 143,
      "p99LatencyMicros": 2190,
      "maxLatencyMicros": 5072,
      "samples": [
        {
          "index": 3000,
          "testId": "req_spoof_3000_0a003f",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_2574906",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "bfaddebb2fd5fc1313692f433c58ac28388cec9d56406b83aefac60a5a499b7e",
          "receiptSignature": "ea0759919e6a17d26deb4f1744ef09621e8d394cf38adb10b4110902c279ce9a",
          "latencyMicros": 242,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 3001,
          "testId": "req_spoof_3001_4f9402",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_8586058",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "4883801ca750238f9f9c18d44b23a1b13af661616b336219f34a9301a937576a",
          "receiptSignature": "4b6882674d0015b6bea1e3fca333e74308ae5ffed4df30b92427e706e9cbe379",
          "latencyMicros": 138,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 3002,
          "testId": "req_spoof_3002_c8f9c4",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_ab65",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "b75eb53122d5bac05f7e81fe49b77830a8942d77f490b7f4e1a90564a05f4dea",
          "receiptSignature": "fc3e02a572db5b5a4565b38cf6e90ec01558a7418fe14aabbe3a6de6bef627e6",
          "latencyMicros": 102,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 3003,
          "testId": "req_spoof_3003_4e5733",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_3003",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "4cabfb3381561aac20d681a4c2ce20e10f35cdd60b1928d841189e9a0a59a8bf",
          "receiptSignature": "ff603e905437da8d75c0501a8c1bb5f7a702ade94b5898f3bb497b0e8c8f66a4",
          "latencyMicros": 90,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 3004,
          "testId": "req_spoof_3004_3eec87",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_6052380",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "1fa1202dd7e19807c13f5123a4e4a93476441aa1816dc95b3df5205a3c77f172",
          "receiptSignature": "303aa2a34b7288fc833f572dc922e8ef8b27be6d9651f68d9101a2dd6b38d796",
          "latencyMicros": 87,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 3999,
          "testId": "req_spoof_3999_ca05ac",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_3999",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "4be90878bd4425a1515e8d3e0d63a02589cee65af3a560418d72f854ac73bdd2",
          "receiptSignature": "361028189bf9d56b38d5ac19dd642330cf35cb0057547571e95a7c22e31e0f52",
          "latencyMicros": 174,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 4,
      "startIndex": 4000,
      "endIndex": 4999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "808d68ba7b57d4a5c9161aed824cb26988c7a5928a25442f4b933067889b278d",
      "durationMs": 311,
      "avgLatencyMicros": 235,
      "p50LatencyMicros": 203,
      "p95LatencyMicros": 364,
      "p99LatencyMicros": 738,
      "maxLatencyMicros": 32912,
      "samples": [
        {
          "index": 4000,
          "testId": "req_spoof_4000_b35c18",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_shadow_4000",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "430dd6b48944e57cfc6d3d3ec421040f0c36141dd7f8a243b4d007ae193ce14c",
          "receiptSignature": "19afc8b8c21f28833842751ea10383379f096226e1a42c4ff20d2c2d65f396e2",
          "latencyMicros": 491,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 4001,
          "testId": "req_spoof_4001_4e480d",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_7812918",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "ae38f8b0ade4b1ca57de8a3d9634492ebbf21e8515e257e748a14386a2eb09c5",
          "receiptSignature": "138138ed334bbf363f0c8f826e71f4812ea00b1824a71f668c76b42e58eec21a",
          "latencyMicros": 338,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 4002,
          "testId": "req_spoof_4002_613c73",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_4002",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "867ffdcf7cfa248edf90b4c5bbf4473db97287cd58098f6975a4498cfee3927e",
          "receiptSignature": "c7bdacccfbd8a46cf84a7c64bafc950c6f86c4ef51bc091eb77a6093e8ee6861",
          "latencyMicros": 317,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 4003,
          "testId": "req_spoof_4003_849c60",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_3d0a",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "156feddd5a6fbd151864a43b1184a43a29481c2cc4f73f68bc5cbad3e59369eb",
          "receiptSignature": "fa0a05d31bd8f3e151571653b725c42c06402a8596c8dcefec2fd85eacfec384",
          "latencyMicros": 725,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 4004,
          "testId": "req_spoof_4004_ba66fc",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_8958",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "943804051a598705b2d5ef1c5020b5f14b1509e67f4286423b1b5c1547c69643",
          "receiptSignature": "7cf661f2bae5d5f7fa77b541c505ad565885248c5f7b0b5764cc1d5933e36f09",
          "latencyMicros": 295,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 4999,
          "testId": "req_spoof_4999_4197a6",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_4999",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "d41172ee5862449db56ede0d1f0ccd9604a1cee838f4d82676828c04095d029e",
          "receiptSignature": "674ad0cc641b85618479e5f7fc5d6145179fd5dcc9be3c56ec0dc0b4c61726de",
          "latencyMicros": 64,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 5,
      "startIndex": 5000,
      "endIndex": 5999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "0fd3fba16becf307a630ca7d284cfab0b6fb35b9162fa533fc5ecf4cc2ae6ec7",
      "durationMs": 285,
      "avgLatencyMicros": 144,
      "p50LatencyMicros": 67,
      "p95LatencyMicros": 215,
      "p99LatencyMicros": 2934,
      "maxLatencyMicros": 10173,
      "samples": [
        {
          "index": 5000,
          "testId": "req_spoof_5000_271c23",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_phantom_5297138a",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "ac05df80e767cd3952f09af27dc42a0210b98221be35014bc6f3f0ab701cf71c",
          "receiptSignature": "e5cb6d3de4557af980d2f098d1e1a533abe8377f6622de47426183a2859a2814",
          "latencyMicros": 188,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 5001,
          "testId": "req_spoof_5001_24c535",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_af92",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "1fc8e7169287b0d4eb765afc49afe1b14e5c88cc7cfe39cbaee29acc8deb3543",
          "receiptSignature": "b4480fac2a02af33ac235889073f4ad671b0770d0b81dad5464c20f0344532e7",
          "latencyMicros": 94,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 5002,
          "testId": "req_spoof_5002_58ae6c",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_1040367",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "327bb349d589e64b8d38188a25c444540946365eba95a042724ebebe2236b75c",
          "receiptSignature": "aef699ffccebd39621f4821ccda15e777e872a72224756063e47bd764998277b",
          "latencyMicros": 81,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 5003,
          "testId": "req_spoof_5003_b64a5e",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_phantom_90e6065e",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "1a3d3c06b246f395c4a90b49660ff68cbe0a8bfdccecc9b2de76050f838af38e",
          "receiptSignature": "3804d2659c04422ac2b26f57f70f7ce43d9a5eb997896edab2b6053143a3705d",
          "latencyMicros": 68,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 5004,
          "testId": "req_spoof_5004_f03de9",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_2795183",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "314f37576c445b08b6fb7d1041fa96abbd182676adb2ef45f997df20b01bcf38",
          "receiptSignature": "e6c209bc1717a48376272ae611cf01729365eb72d0c60cbb9ba7b79c0fe8a446",
          "latencyMicros": 63,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 5999,
          "testId": "req_spoof_5999_c6f1c6",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_f171",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "d4e7580831fb53b8bc72a78046afab63c5796135204e943422e1249204277a7d",
          "receiptSignature": "dcca1f5c09270c224e6caa4909a5602a5e4a29b7072b78fc964a161add664170",
          "latencyMicros": 63,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 6,
      "startIndex": 6000,
      "endIndex": 6999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 1000
      },
      "batchMerkleRoot": "75529a87ef8449552c41d1dca03b291df4ae9f3ad866d1a1ab611d4cbca99141",
      "durationMs": 165,
      "avgLatencyMicros": 111,
      "p50LatencyMicros": 70,
      "p95LatencyMicros": 113,
      "p99LatencyMicros": 259,
      "maxLatencyMicros": 14788,
      "samples": [
        {
          "index": 6000,
          "testId": "req_spoof_6000_936780",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_6000",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "69cb784789d91a487278ebcbb4b154805e12df1cfabe67dce71382584cdc0116",
          "receiptSignature": "0c1222d1998d49f273f46a522836c8b8551736b48f5e191f33dd7c4966c4d306",
          "latencyMicros": 193,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 6001,
          "testId": "req_spoof_6001_86145d",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "2e54764d47aa4e7541f10bac7872ccf2e8f297b22d5e1d91dec3babd861a232b",
          "receiptSignature": "3db900293006925fa6ad9721b5933e330f3c6a55c8d2df912f374b2c9bba6819",
          "latencyMicros": 78,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 6002,
          "testId": "req_spoof_6002_7a4185",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_shadow_6002",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "75288c54e269a9858db12f636b6ecc64c779c4c2f6041df5072e694ed68f6554",
          "receiptSignature": "69f7e1ad7295d0e4ca6df3e8123584c4519937e2b1942513a75d3b1e8e9ec1aa",
          "latencyMicros": 73,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 6003,
          "testId": "req_spoof_6003_5591d3",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_phantom_e298fa79",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "1ec34d570f5d66168dd9906cd0f30fc72d635b418c8544f73be0db2c0cadd275",
          "receiptSignature": "b5b0d370f9fa9975b5db95964b5bc072e10d152ef395aedf08a6bbd614087f8d",
          "latencyMicros": 69,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 6004,
          "testId": "req_spoof_6004_fa68a9",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_ghost_1314785",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "3a5b9633d42220e74b5f20d5e2a31e5bc6e39d610f54870a6a41ac2c4bfa52d5",
          "receiptSignature": "be853b4a3d6bcd5b302653982adc93b13431e136e086137e1d264f267c2a0eac",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 6999,
          "testId": "req_spoof_6999_ac56c3",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_6999",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "b07ea57a9d50a82e8474bfeb4e0123f0a06d8211753dc20dc4ebe489769c2fc9",
          "receiptSignature": "55182b9795ca45bb44b09a38d20b80594f0fe5611821c1b6849c92cea73b4e3a",
          "latencyMicros": 66,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        }
      ]
    },
    {
      "batchIndex": 7,
      "startIndex": 7000,
      "endIndex": 7999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "MISSING_SUBJECT": 500,
        "INVALID_AUTHORITY_JUMP": 500,
        "INSUFFICIENT_EVIDENCE": 354
      },
      "batchMerkleRoot": "93d451b79133f20035d4e89bf346eed35750f7b10dd22b47f710f6589650e55e",
      "durationMs": 137,
      "avgLatencyMicros": 88,
      "p50LatencyMicros": 71,
      "p95LatencyMicros": 113,
      "p99LatencyMicros": 386,
      "maxLatencyMicros": 3992,
      "samples": [
        {
          "index": 7000,
          "testId": "req_spoof_7000_5e6997",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_7000",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "7953799dc87d7fb06758d56a44c839c5ecf4966ba49b025d990995e0ba5feb62",
          "receiptSignature": "879503d2798952866e9f36c9aa7b66014c8ef2e9174f7ecb5460e91769e67bed",
          "latencyMicros": 189,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 7001,
          "testId": "req_spoof_7001_e128cd",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "DROP_TABLE_ATOMS_7001",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "15e3744a5bd641ebb54b12c42ed2dafbc2c35d0481e4dbad85bce553ad9b1452",
          "receiptSignature": "164a62643b08e92551ebfeb7250e8cfc708cde61685281a9075c17bf97eadcbc",
          "latencyMicros": 107,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 7002,
          "testId": "req_spoof_7002_063267",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "../../etc/passwd_ceeb",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "6c838549af6cc9565add72e0311a41d594dc654c471081b4417b4f66dc9edce1",
          "receiptSignature": "7439564b4f5d4c1a080f49ab0c81d4145f7ca3798859050740b950abd5512a99",
          "latencyMicros": 232,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 7003,
          "testId": "req_spoof_7003_34c0df",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_7003",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "bf3a0d98fcfbc13bdb9d31fa9e1cf2d4290f8b109c2e2496131da776d74f5852",
          "receiptSignature": "ee8424d784faf3ec95b8e890db1ee891c0ca809128187b772d8f9f1d5f1730cc",
          "latencyMicros": 110,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 7004,
          "testId": "req_spoof_7004_510af4",
          "category": "IDENTITY_SPOOFING",
          "subjectId": "atom_null_\u0000_7004",
          "requestedClass": "FACTUAL",
          "requesterId": "ATTACKER_SHADOW",
          "decision": "Denied",
          "violations": [
            "MISSING_SUBJECT"
          ],
          "canonicalHash": "9223ea46e1abc7031a0daa85e0f5e162951cf764868c41a328c2f3adaec2134e",
          "receiptSignature": "cf34786c198f56583f9a700236241742717ca754a475f9eb626bbc666f4435c4",
          "latencyMicros": 84,
          "explanation": "Boundary checks failed with violations: MISSING_SUBJECT"
        },
        {
          "index": 7999,
          "testId": "req_tamper_7999_86947e",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "1ea3b0e7dbfdd5d7d32a75287b1ec234a7c58ecc527a17def9c758ecf3e635a5",
          "receiptSignature": "15d249bb98502379275f8b590f12d137ae205e9639971c9002851d7ba72c0975",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        }
      ]
    },
    {
      "batchIndex": 8,
      "startIndex": 8000,
      "endIndex": 8999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 757
      },
      "batchMerkleRoot": "f217d8fa68172908cb3c5a4ed7328c5b27f78fce17157d0048a94cc67bdf794e",
      "durationMs": 148,
      "avgLatencyMicros": 85,
      "p50LatencyMicros": 56,
      "p95LatencyMicros": 190,
      "p99LatencyMicros": 288,
      "maxLatencyMicros": 6842,
      "samples": [
        {
          "index": 8000,
          "testId": "req_tamper_8000_a373f6",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "fb2a26119460fe603723dac423afb8f2eff431aae43aa6780756f4fa36033b25",
          "receiptSignature": "a2937c87f6fbedef943cda45ea6cb6b77a9e8dd31b30c0a127fab4e6ce7176a9",
          "latencyMicros": 190,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 8001,
          "testId": "req_tamper_8001_5d271e",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "d0b4ca7d71f82dfd709064085ac8bafae1d0558078f99d4c4aab117b59ff4b79",
          "receiptSignature": "e6eeaf854489b000671f008e3b6c1ace4a4110269997613a25daf65d742ecbe9",
          "latencyMicros": 98,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 8002,
          "testId": "req_tamper_8002_e6e551",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7ae0019edc22b247f8ddb0cec8c3cccfb4ce87daedf9a91436d6fbb8c22ab42b",
          "receiptSignature": "6ea6aa0bd6a43a6a70db717171c2c3cd786f4084dea8ecf4c99f9be062312546",
          "latencyMicros": 86,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 8003,
          "testId": "req_tamper_8003_a7e4c1",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "0e2213ed87a0f4b725d6b0fa61ac8acee39e832801e1449aea62d023d2596b91",
          "receiptSignature": "90e6977ce48e17e29077df41c3913018b2237b2713b5e6bbeaef4c3b92cf338f",
          "latencyMicros": 274,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 8004,
          "testId": "req_tamper_8004_7745a5",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "9c37f576021fe7b6b2bacbfe1e5dbdc74892da11f6182e5ccd893f067be37102",
          "receiptSignature": "adb9870804a97e39bfdf73d5de66d84ec7f6966d84e01f1d0a08f2ef6324118f",
          "latencyMicros": 72,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 8999,
          "testId": "req_tamper_8999_0e3f11",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "0f06a7c5095b78d9e5479433df909526d936ba164bddd68b19f540802b20cb02",
          "receiptSignature": "3ed0c5878ab091926bd11adb521e97546778f10ed9a3ab680264225dfd970a9b",
          "latencyMicros": 45,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 9,
      "startIndex": 9000,
      "endIndex": 9999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 739
      },
      "batchMerkleRoot": "b23397b75077c8351b48d9783e8159b51f8e72a425a6c046b5869904bbbd7f91",
      "durationMs": 135,
      "avgLatencyMicros": 86,
      "p50LatencyMicros": 53,
      "p95LatencyMicros": 110,
      "p99LatencyMicros": 713,
      "maxLatencyMicros": 12436,
      "samples": [
        {
          "index": 9000,
          "testId": "req_tamper_9000_e3f57b",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "5de16f58aa4e5c59ff00c85be9f88471b781db6547a699583bd86c426a1a2aba",
          "receiptSignature": "a1808ec07fcb10b0a93362c923e85f444104f30495c713714108a7e19e9290e7",
          "latencyMicros": 178,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 9001,
          "testId": "req_tamper_9001_1efbb3",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "9e99dfc48b0cfaafaf58b337ac49ad299d974669f8a726467b658af95ff8d99d",
          "receiptSignature": "62df340a31a95bf0fdb7d3c25e44a3bf616e958921a0277ab7e416ba083461bb",
          "latencyMicros": 74,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 9002,
          "testId": "req_tamper_9002_732ce1",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "f13a40a0150aab67335d702e67e3068c7310fbde60ed2457fa08593b7ba0b9c3",
          "receiptSignature": "71207d610c16631446eafd103e1504220b98f7c945a5c10a2da2fb98c5230c24",
          "latencyMicros": 46,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 9003,
          "testId": "req_tamper_9003_d8421f",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "aeaf1d36081a6db829bb32a2c18ba1efc8665feeab111e8378f1f48f2e1ca44d",
          "receiptSignature": "9ac1e6bc66aa981d73607d411e7ff3d636c9ea2e1bf588777136999e2123b0bb",
          "latencyMicros": 51,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 9004,
          "testId": "req_tamper_9004_1fe303",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "a03d66b3941b74c04ae64d0cf9749c1eac76f8d48b72cfae0e47e428d3950092",
          "receiptSignature": "f8e41478f07a23dd895a9b21b339cbd8ebdf8d4eae09c6b1cb9dca1df71fb3ff",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 9999,
          "testId": "req_tamper_9999_439821",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7741b38652e855d17d4a7b5de7887a5b08c73b7eb8e59cad8621fedc3c3742c2",
          "receiptSignature": "9cb0425ac6eaf04437fb05bc648a5698483d4d73ed0b76e107f085274297c88c",
          "latencyMicros": 43,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 10,
      "startIndex": 10000,
      "endIndex": 10999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 748
      },
      "batchMerkleRoot": "497c5c73c07ee8835ee5540dfa7ac3458cc46295283f2ce086e6eb6a5f094050",
      "durationMs": 142,
      "avgLatencyMicros": 108,
      "p50LatencyMicros": 53,
      "p95LatencyMicros": 91,
      "p99LatencyMicros": 846,
      "maxLatencyMicros": 17186,
      "samples": [
        {
          "index": 10000,
          "testId": "req_tamper_10000_cda779",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "9981ccde095a741f1592afcdf2bf2d45d8dd0d88ec313764e62ee2639691c3dd",
          "receiptSignature": "4b83f501831982f8f49bed0784cdbb2f2debac1be97f1951baaa7b229fd915ad",
          "latencyMicros": 153,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 10001,
          "testId": "req_tamper_10001_c6876f",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "fa878646c0b80f2147b7b9e286ee1d4e58f5626d632eeab1926ccd9fdac390b0",
          "receiptSignature": "104c3ab75bb89825d0c65377345e6e0e2de55efed60fd28967684362341a2b0c",
          "latencyMicros": 61,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 10002,
          "testId": "req_tamper_10002_1c0abd",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "24f4481bf71effd3eea49b3424b26e74637e1189e68495f3caa22b82b7f87136",
          "receiptSignature": "d0fa7ad90e56132adf0aae08efb8ea2243f3f1354c5d28c644c61772d79788e9",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 10003,
          "testId": "req_tamper_10003_f527e6",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "d654c2943b280b59ceddc54c8383e7f7a478083e001fe5cb53067eeb8ae30518",
          "receiptSignature": "2b1a743acd1499e51d16e9f85f7a6b4c8c155d06b6ea65d644896537114ea86c",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 10004,
          "testId": "req_tamper_10004_cbc620",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "5e0592f05c1568f2adccd87a8a8100cbeed0b38d6349a557c501aa5c764eb646",
          "receiptSignature": "78e72edb2ea7b0be22bd8a3fa0d25ac14a841712a38b5311da855c6b76d726e9",
          "latencyMicros": 52,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 10999,
          "testId": "req_tamper_10999_06d03f",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "bb68c88612219b2559bdd9f658edc2604c41b2fb3fddc6b64cfa41e71fb15261",
          "receiptSignature": "c12de626b720193a25e27def5b0627f8e609aa24b5f5c244be517d281d0d716c",
          "latencyMicros": 44,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 11,
      "startIndex": 11000,
      "endIndex": 11999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 765
      },
      "batchMerkleRoot": "1406ba449d22549cc87618ee6cf0ed857757a50f42b2c0926fa69eec3e3b0956",
      "durationMs": 157,
      "avgLatencyMicros": 109,
      "p50LatencyMicros": 54,
      "p95LatencyMicros": 229,
      "p99LatencyMicros": 689,
      "maxLatencyMicros": 3978,
      "samples": [
        {
          "index": 11000,
          "testId": "req_tamper_11000_661a4c",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "037eb7e9cf94b7bc1ee47e0c70a8c9ca14a9274ef8e87e8e4f51af6901980496",
          "receiptSignature": "f54757d9e47265d8d60444896ad0816aca5fcd2297413305b7b228ed61369377",
          "latencyMicros": 179,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 11001,
          "testId": "req_tamper_11001_12d264",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "8856caeb7fbd42371cb8e19364b4502fd2d13c345b86205d9d6e673567b33e5e",
          "receiptSignature": "81566eacc3cb57796aa28445990c86a8d08becda61bf2409b6bfc36cb389c318",
          "latencyMicros": 65,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 11002,
          "testId": "req_tamper_11002_c4fce6",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "39205d15726dd21f17dce525ce3f98dd6f5903d6f2cb288351fe97caf571bfa5",
          "receiptSignature": "b879821b57f146d029611b3395e28c148f4d780bd5226bbeb708a50c8bbe82c7",
          "latencyMicros": 57,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 11003,
          "testId": "req_tamper_11003_41fae8",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "2254a3aeb4bd0541768b746eb17faf9aa19062e96e7e99e53e98df1d85a2adbc",
          "receiptSignature": "9fd66165cbed379a3c9ccfd0f7f2f5e8b0f3e2344597dc236165c30be81c1518",
          "latencyMicros": 54,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 11004,
          "testId": "req_tamper_11004_9f3269",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "c1e4bc93f19f283f5a4e004d0b58df7da967ee216cc930a9fd37dc4c0c846a74",
          "receiptSignature": "484f8f34744cbc11d22caaa4c642fc6e33d1ccd12eb3e0f7bd62f51e4dbd476e",
          "latencyMicros": 71,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 11999,
          "testId": "req_tamper_11999_161fcd",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "1fc4d76641f0de3296a19af70dbb4f6642a5a169d5d7f13ca5caadb0a9f9cfcb",
          "receiptSignature": "9f82eeadfa3ab39380808c514490e02fdbd79240a502381fd84700fbfdd30aa6",
          "latencyMicros": 57,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        }
      ]
    },
    {
      "batchIndex": 12,
      "startIndex": 12000,
      "endIndex": 12999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 784
      },
      "batchMerkleRoot": "7790805abcc16df527f684c1afc2b8b3560f99a375bdadec3960efc6e8436333",
      "durationMs": 184,
      "avgLatencyMicros": 101,
      "p50LatencyMicros": 53,
      "p95LatencyMicros": 88,
      "p99LatencyMicros": 264,
      "maxLatencyMicros": 11078,
      "samples": [
        {
          "index": 12000,
          "testId": "req_tamper_12000_4166cc",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "ec7794dd95bf4d6f3d583af70f02d2c3a21df7167f064aef47bd51ea2f64f6ed",
          "receiptSignature": "dce981fa9b522cdb93d182391c505ca29bdf5dbc21079d69d7e7d06fac45c156",
          "latencyMicros": 152,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 12001,
          "testId": "req_tamper_12001_65f31a",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "14412216feb7d87eb94018736367f7db7a9f6a9ac921ecda7cd85a86be096c5a",
          "receiptSignature": "7b1e7730a5132f6d128c250b3208547f9f3fc4cc8f7625f2ae9493ff386cff8a",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 12002,
          "testId": "req_tamper_12002_77ceb3",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "d86e5d67b50a2e4ac527b783fdf069c128b753ef038bfc06fca2ca1e1cbd4104",
          "receiptSignature": "c001f70bfcbd9529115e2a90c97268da7f18c04a48c3188d21fc284f7e157545",
          "latencyMicros": 51,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 12003,
          "testId": "req_tamper_12003_e9998d",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "918510bba4deacdd88c3aba5d035825925c2336f41dd47b7820167daafcb7035",
          "receiptSignature": "6ade45b2548ac04eb69027f1c6ff1a8c0335a974066cac450ef2415a137d7d41",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 12004,
          "testId": "req_tamper_12004_5af112",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP"
          ],
          "canonicalHash": "5481fcd20cebbe4656c2acd13b70893d7a60a840f68c4a6714fac921056d0ebd",
          "receiptSignature": "d20dfcd8e65a8a326626b8433cf3a17efee75c10f2894893b42436aad41942ac",
          "latencyMicros": 52,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP"
        },
        {
          "index": 12999,
          "testId": "req_tamper_12999_fbeb0d",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "da1a42233bc1263217a8e3343f115be8aac68ac726f789cb5f34b27482b4a7fb",
          "receiptSignature": "3c835c9dc9969bde26a4126b0db9764ce11ca32db8f9110cc01e8ef1e207e6b5",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 13,
      "startIndex": 13000,
      "endIndex": 13999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 752
      },
      "batchMerkleRoot": "03af490a7d99ec9a90c5d0baaa59208e26b78f2beea6d3601e00b1e845e108ba",
      "durationMs": 331,
      "avgLatencyMicros": 210,
      "p50LatencyMicros": 54,
      "p95LatencyMicros": 152,
      "p99LatencyMicros": 5577,
      "maxLatencyMicros": 13110,
      "samples": [
        {
          "index": 13000,
          "testId": "req_tamper_13000_a5f3c4",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "244685adb03ee39bacba7b9ec9a0346dc25b5f7b9c103045b39f77c8868ee501",
          "receiptSignature": "cd5aa0787f9820317306b90f336ae160eb8ba2ec02b22a93dbb7cbed0614d1a0",
          "latencyMicros": 178,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 13001,
          "testId": "req_tamper_13001_f53b32",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "fd65e03289fd694f5a5ef64c916746f5d0492a8647a1c78f39f62e404a10e8fc",
          "receiptSignature": "c70b2a86a703dc227687f5199729969c0e9cbf6415701a48899d43c336364ba2",
          "latencyMicros": 75,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 13002,
          "testId": "req_tamper_13002_0d095b",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "e389d82dc13bb60b0dfd905afa6654868895ef951892957d4ed7d08c4e6dc153",
          "receiptSignature": "850549dc98a8590fed9af382af1936c152fbf102667fdb73331d5292ea3f99bb",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 13003,
          "testId": "req_tamper_13003_c856d5",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "c436ba08969908bf05ed079c4d28efe94d2ac477b6d23d81a7e8ecae169296b9",
          "receiptSignature": "891a114fbdd364a74d19650cb3dca54d6935d616c423252454916b75d114451d",
          "latencyMicros": 48,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 13004,
          "testId": "req_tamper_13004_fba7f9",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "b7df6f3ccd48d94976d8a1d754f557be27e089cd0eaa178bbc9f36b4c10c29aa",
          "receiptSignature": "f2fb8066a6ed5d0eebda521e683e6857c9c6f8b45f89b06b50e0824020d7dd99",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 13999,
          "testId": "req_tamper_13999_813dd6",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "f90258758d9cec5fd89784935294da7fa23fc5ef9475553d2b7ed9cb461857a3",
          "receiptSignature": "dadb212e6da577b663900eef678ee7a54d9280e65bc727413b9440fe94ebf6ec",
          "latencyMicros": 51,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 14,
      "startIndex": 14000,
      "endIndex": 14999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "INVALID_AUTHORITY_JUMP": 1000,
        "INSUFFICIENT_EVIDENCE": 745
      },
      "batchMerkleRoot": "e1c1996618b79a4a5d8ed95bb9a1c0a04552c10072d6d34cd5007bf050128aa3",
      "durationMs": 112,
      "avgLatencyMicros": 77,
      "p50LatencyMicros": 53,
      "p95LatencyMicros": 174,
      "p99LatencyMicros": 343,
      "maxLatencyMicros": 1662,
      "samples": [
        {
          "index": 14000,
          "testId": "req_tamper_14000_893f24",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "2fda8d024a1313e1e6d41426c8656120d74344864f5fbd0c72503eb2ace3f0b9",
          "receiptSignature": "1ada9de3f93834172944a26182e752ba33ff0d851b7788fbe066aeecdf5e9006",
          "latencyMicros": 151,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 14001,
          "testId": "req_tamper_14001_b72223",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "42d8b6d6ded916f2354850908aa80386252880efdba0651057f1271ac824930a",
          "receiptSignature": "d50738bba4817d1234906be3f21f54346fb52a741582d66bc64dc09b4830faa6",
          "latencyMicros": 93,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 14002,
          "testId": "req_tamper_14002_7b8a02",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "5a9ded7fb8bc5d8a0c4166757c88d1d14eb53ac412403e42114571c4443276db",
          "receiptSignature": "6888a183ddcb0dda0c837698ba6d659540ef136a193992b638a06034b76941c7",
          "latencyMicros": 68,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 14003,
          "testId": "req_tamper_14003_2ec5fe",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7eb1f7c5ff254e48c0d79f47abecb89eebbd10bac331a7aaa63c868b0c93fa58",
          "receiptSignature": "ea90ec9545812b10835100de9aa1cc6f4a098a3f3509546cc92cdaf40e50d2c1",
          "latencyMicros": 76,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 14004,
          "testId": "req_tamper_14004_96113e",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "FACTUAL",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "f7b9edc80e86e1077a45103ecbf5abf28d701465b2925747852f3bbfbbf3c0f2",
          "receiptSignature": "d24f529e207c8cbd60826f28127a77ca9b1989bc87d43c4ec72351d414568a7f",
          "latencyMicros": 69,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 14999,
          "testId": "req_tamper_14999_9a1e80",
          "category": "EVIDENCE_TAMPERING",
          "subjectId": "atom-hypo-004",
          "requestedClass": "ENTERPRISE",
          "requesterId": "AGENT_TAMPERER",
          "decision": "Denied",
          "violations": [
            "INVALID_AUTHORITY_JUMP",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "ecc436528f14d9be51029b7da916687b663775eed8898a8dbec8e9ce535d2ab7",
          "receiptSignature": "e34e55f023e3f7fa1d7529d9b2bb2f1f4d0e9762e624f80aa179fa134edc9eca",
          "latencyMicros": 47,
          "explanation": "Boundary checks failed with violations: INVALID_AUTHORITY_JUMP, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 15,
      "startIndex": 15000,
      "endIndex": 15999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "96810fe89ad87291831a7d38bf5ec7344a419d553f884eea313cb3c5d04d1ef1",
      "durationMs": 97,
      "avgLatencyMicros": 59,
      "p50LatencyMicros": 52,
      "p95LatencyMicros": 90,
      "p99LatencyMicros": 224,
      "maxLatencyMicros": 659,
      "samples": [
        {
          "index": 15000,
          "testId": "req_poison_replay_15000_6b7b",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "f2e27e3faa33ca590e8aca15417298ec79dda1594118696617744c5b75037d1d",
          "receiptSignature": "3a3645c41e6f36627893831363fd958da49fe8d1abfed81dcf807bd82abbff7f",
          "latencyMicros": 556,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 15001,
          "testId": "req_poison_replay_15001_6bee",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "28bf2033c5b2bc27c7a714152e193335fcde67653f1b631f1021461796d7f5ad",
          "receiptSignature": "5decd2bb91f76b44cfd19ea6b6404bc71bd62b30598d597f07dce4f1ee277b7d",
          "latencyMicros": 337,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 15002,
          "testId": "req_poison_replay_15002_00ce",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "4c6bef4c2631c1310d5024beb70b614ca0cd55beea217b7472d9094a3f860c09",
          "receiptSignature": "f2bdfbdf6bd4f715b927efca00b0fc1f19bf60330b80859f8cdfdf5c272ab730",
          "latencyMicros": 99,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 15003,
          "testId": "req_poison_replay_15003_1bb3",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "ba9dbc1ab1de01a5d58fbdf89e76486082f1a5144c81e0e65de1f383fbcac639",
          "receiptSignature": "5e307e1f229ea90ec0b636edde5aeb00fca457bcf4803a45b1dc134cb861974b",
          "latencyMicros": 64,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 15004,
          "testId": "req_poison_replay_15004_4b4f",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "62b0c27468d80129c9a6823172567b87bcd12b48dd09cf4d46ff76b54dfa15e7",
          "receiptSignature": "ce58b550322c26def4b7878baed580e5f665a208feab194df5e444cb3eea5d16",
          "latencyMicros": 56,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 15999,
          "testId": "req_poison_replay_15999_94f0",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "70c9a0ef1b6003847341d547d647848f0647ac4ade255fe8cf44fe835dc07858",
          "receiptSignature": "49e502c3ffb2598f5acabf3712b84859f54e3822ecae6df75f6c38f9100cdd91",
          "latencyMicros": 44,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 16,
      "startIndex": 16000,
      "endIndex": 16999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "c19ea9f3516993013d4d477b83b319b04f490c46d81c8302e5e5cad933837966",
      "durationMs": 130,
      "avgLatencyMicros": 69,
      "p50LatencyMicros": 48,
      "p95LatencyMicros": 114,
      "p99LatencyMicros": 282,
      "maxLatencyMicros": 4483,
      "samples": [
        {
          "index": 16000,
          "testId": "req_poison_replay_16000_0468",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "5719436cbfbdc417419e34866c6fa69db123de9e842b0590158a5d2a75519eec",
          "receiptSignature": "ec16da27d5cb8e78c770b3c9e72ad9bc1eec61691e632420afbc4891593309a6",
          "latencyMicros": 247,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 16001,
          "testId": "req_poison_replay_16001_381f",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "981203e32679513ac89af0ae0b361f8b65fd3f4543bc2e9b6d5c0a9d81e714b7",
          "receiptSignature": "53f11b55a133e8fedf6b929e257902041a601237f1397b49af2701526816866d",
          "latencyMicros": 96,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 16002,
          "testId": "req_poison_replay_16002_a853",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "47a6e41e397d4d81763313d8bcb0cfd757b2d97854e4cf6e579f55d5386c04e5",
          "receiptSignature": "bd73f3f7c5b0047efec04cf5d14412947bfacac6120681ced26bca559917b5af",
          "latencyMicros": 57,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 16003,
          "testId": "req_poison_replay_16003_84d7",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "ae7b45e8963d6dfaacd7998fc98c99bd61f6f6be08f4ad684f8deb9728c9e24d",
          "receiptSignature": "4bd0f5bdbec31b6cb6d98651f6a82fb4034f05d97d44b0b25ff597dc7c62307f",
          "latencyMicros": 52,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 16004,
          "testId": "req_poison_replay_16004_461d",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "da0f8a36f04cc80bcb95293f8c4be752a583c6a2d97983ec1a06295b49b65c0b",
          "receiptSignature": "2fad093cd660797422b833d3f9f6230e1dae7e24d48275365d6e0577e039f692",
          "latencyMicros": 51,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 16999,
          "testId": "req_poison_replay_16999_3a02",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "0ac30a8d287bb5e91a00a6b36183295ecc585f4bd690119937cb0ef98af1479a",
          "receiptSignature": "bcecb906fbd331460311802034fedc2d9532b25bacb33a1eafc3f613be4fc128",
          "latencyMicros": 45,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 17,
      "startIndex": 17000,
      "endIndex": 17999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "45d3e8a05866d8a8dce5476c79389e66cc96b8c61ed189a7079abcb8899040af",
      "durationMs": 339,
      "avgLatencyMicros": 229,
      "p50LatencyMicros": 49,
      "p95LatencyMicros": 438,
      "p99LatencyMicros": 4000,
      "maxLatencyMicros": 28003,
      "samples": [
        {
          "index": 17000,
          "testId": "req_poison_replay_17000_4ffa",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "859c0e06aa371cb7d03022be0881ca46db57392a2fa6d7976b86ce7c76e13c8e",
          "receiptSignature": "c82b1dccedc5622138b51ddb0d8547097626c03d94a39d03b655bccd1105f7b5",
          "latencyMicros": 4691,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 17001,
          "testId": "req_poison_replay_17001_68d6",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "3cd1eae2e66d6c75122eeecab095364e535c3df4eb7ab841eab5c4890db4fd79",
          "receiptSignature": "875e1991d62458aaae5afcba126ad9d0ee4084296c9a00c914ee02a030249c2e",
          "latencyMicros": 132,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 17002,
          "testId": "req_poison_replay_17002_ebbf",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "53b0839f542ed46cc21e352ab86409f1ce090d27d5e0774b1e389a52219970cc",
          "receiptSignature": "6c25c74efcd70cdb7e3ab98c61bbaf686dca65fe6ed20274921fccb15f033c80",
          "latencyMicros": 54,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 17003,
          "testId": "req_poison_replay_17003_5c56",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "aafde5cceb9dc355eb8b8216c098f8b55cdc84c350535d6a3bcc092744714709",
          "receiptSignature": "1dd98705c8fd8619078cd36f4110646c0455f02810b39745ad825c1e0d488fdf",
          "latencyMicros": 47,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 17004,
          "testId": "req_poison_replay_17004_4c60",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "9423bc41aeef4d6f5ea5e066b0bf97d9bb864ed4135bb1ad8b7ac9cba5bf4df9",
          "receiptSignature": "46016749f4fc90bbf2a052fb5caca90ec199fd4cf50467a63316992ceec28980",
          "latencyMicros": 52,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 17999,
          "testId": "req_poison_replay_17999_6651",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "95fe802eb17da62c78c1144ae56fb4fc1019e191ecefbe14a59e2a4c27cd5509",
          "receiptSignature": "57fbd2d1e50530e94990ca60dc59a19bd77144c0e45a78ddc80f4865477162b3",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 18,
      "startIndex": 18000,
      "endIndex": 18999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "bbee289037f398b15de1866682c09cd7bd955ab777a2b536621e8e569484ca8b",
      "durationMs": 317,
      "avgLatencyMicros": 212,
      "p50LatencyMicros": 49,
      "p95LatencyMicros": 186,
      "p99LatencyMicros": 5316,
      "maxLatencyMicros": 25275,
      "samples": [
        {
          "index": 18000,
          "testId": "req_poison_replay_18000_4b10",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "aace03f08daeaff9e3745fe07f497f7b07c9fe673a90c61af0ad1e57c6fad669",
          "receiptSignature": "6ec40123dbb7d57db2402d0b6e0225faf4716b94744f986b278dd0d695355ff0",
          "latencyMicros": 154,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 18001,
          "testId": "req_poison_replay_18001_c427",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "f2ac25a1ba1252221b05f3cd1fb54aba1564a6b8081ebde4ef6212ecdc55bd6a",
          "receiptSignature": "9a06518d24a076e0272430f090ce8ee95856c0ee7af8e2b1542d92d0797206c9",
          "latencyMicros": 289,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 18002,
          "testId": "req_poison_replay_18002_203a",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7707894f453625da15c54d4a529b4efd400401b49773f796fd4804d497571468",
          "receiptSignature": "7869a6ddc593dc938c72f33651a0a7b4a9a0043f3ab090915616ebf2abbe44bf",
          "latencyMicros": 102,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 18003,
          "testId": "req_poison_replay_18003_e7b9",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "09dd6780f153cf46f8b5c39ee5d3b4049a100f599f31931bdafa765932d3f4db",
          "receiptSignature": "a17f829665d620cd08cc38ec627a2a00f4d3e92d8b1fad2efc0bf3e59bb6cfc2",
          "latencyMicros": 63,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 18004,
          "testId": "req_poison_replay_18004_f4e1",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "a5ff2331074b1a5b6c7b408e0ab73b9cef9cc3c4cf6ca6f400f50d5d2b0f7fdb",
          "receiptSignature": "04500d73285d8808e554aaf4b084af2f88ea5be529e59e1c986dcf542c812714",
          "latencyMicros": 51,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 18999,
          "testId": "req_poison_replay_18999_6509",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "d18b816c63e4bf085daad02440a29b8178d9cdef4bf6ed65c1b61ee8c8051e5a",
          "receiptSignature": "9f7315ca01527db1044dc9b9c3c4bdbb911dea25e3c78b506b141e883681f345",
          "latencyMicros": 129,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 19,
      "startIndex": 19000,
      "endIndex": 19999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "c554d428becd880bdeee0e4c9e128250c37d0032c710caa837337be898f999f5",
      "durationMs": 538,
      "avgLatencyMicros": 346,
      "p50LatencyMicros": 108,
      "p95LatencyMicros": 338,
      "p99LatencyMicros": 11030,
      "maxLatencyMicros": 33050,
      "samples": [
        {
          "index": 19000,
          "testId": "req_poison_replay_19000_a65f",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "247ae8ab32417a5a85224be08f07e1025a679ce7725a3bfb7a6185d21db02f81",
          "receiptSignature": "578cbaa5f431489bcaa9461ae92542ea56890251430ecdd6c982108710926118",
          "latencyMicros": 197,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 19001,
          "testId": "req_poison_replay_19001_a4f2",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "98c6239fd053038f57c088c0697cf6ba050a555fa608c5b47dff89135ce171a9",
          "receiptSignature": "f0e8f78d116ec62c6e2ee088f61754aa2e898ab7f328523ce75b3c07d22da83d",
          "latencyMicros": 74,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 19002,
          "testId": "req_poison_replay_19002_8257",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "be592b8c4e72362cc458c10c4882147db4872cdad993f891a5197ae217f8417c",
          "receiptSignature": "79569f2a7fcae8c5bfd6d5b436533f01af337188deed07d4e8cbd6ff7e38db4c",
          "latencyMicros": 50,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 19003,
          "testId": "req_poison_replay_19003_05df",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "bdf70acb2cf80afd901cf5108e4dee62546392329f20bf3e22c96ea9147f3318",
          "receiptSignature": "0263e832021308753bc948f6a2ca5b86c9adf333dd8c31eebd5b47be28e6dd16",
          "latencyMicros": 48,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 19004,
          "testId": "req_poison_replay_19004_6520",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "c6f2858bb1d7891b874afd437b2487b80ec82914100e2f5b40d355bb78488d16",
          "receiptSignature": "cd4c6db776f54ce7a95f4910e5ce149cea5d7349dd5794089f857cdfe6830bbe",
          "latencyMicros": 49,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 19999,
          "testId": "req_poison_replay_19999_c17d",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "20fbb4967c6e2d09959259d8fdcc2507338bd89b2c16a66adf8333f4642f08a2",
          "receiptSignature": "1efdbc88d5f426670109540ec2e995522b2828d8c306cf073beb3ffae11498d2",
          "latencyMicros": 153,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 20,
      "startIndex": 20000,
      "endIndex": 20999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "6e6d903cf2a5a72707c1ff484db1831e56431ca1eb40d0b61590c2967bba2366",
      "durationMs": 273,
      "avgLatencyMicros": 168,
      "p50LatencyMicros": 47,
      "p95LatencyMicros": 164,
      "p99LatencyMicros": 472,
      "maxLatencyMicros": 55585,
      "samples": [
        {
          "index": 20000,
          "testId": "req_poison_replay_20000_68f5",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "9b699a6ba0398abc0b18d5120d2cfa304691d41ead499bfad3fbff45f4c8a371",
          "receiptSignature": "cf84136676a8bd68f159713e3938cb010213337ea0c6dd56ad2d22a3432f5870",
          "latencyMicros": 320,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 20001,
          "testId": "req_poison_replay_20001_33f4",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "4f2fddec434e33058f4eddabb2225cc277fcb5a8a615fc5f005f01df5e2cfd06",
          "receiptSignature": "73635e74fe51173f27ce48ae3b6f6db98ea818d7b20c9b5d910796698cc45ec6",
          "latencyMicros": 185,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 20002,
          "testId": "req_poison_replay_20002_658e",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "bb5ffeeb5d7f93a196b65ed71c576b19d6da11c81c57f0f22f9a1948fe7fbbd2",
          "receiptSignature": "f2980d28247410ffecf872afb4cfb70d983518128aa9b4d781e408d2a2aff111",
          "latencyMicros": 161,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 20003,
          "testId": "req_poison_replay_20003_7ca8",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "a67bab7d2a92c6c343492079eddf023a8b2455c4e52879b75b42927f14ccc9ab",
          "receiptSignature": "14169f7bd8bea8a74437db0284de13c7adfe2e15f72358a2d188edf09a2444b9",
          "latencyMicros": 156,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 20004,
          "testId": "req_poison_replay_20004_33f4",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "ba897ca262eaaf7d21d7612bdc2f01311065ecb464bc61f7f2feaa87b8c9cbac",
          "receiptSignature": "e5d29fa85517039f995b84ccc4b0f94637b0f4d7b1478915b617214ee0536fa5",
          "latencyMicros": 155,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 20999,
          "testId": "req_poison_replay_20999_2c52",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "5f5a2cef17a06d04d931a1f76aa2c2ee0f23976fb751efbc4f3424bcc545cc6d",
          "receiptSignature": "284cd744a8e48ee0ea3711cecdd46774be763f7ddd4541fba3d237e7398d399f",
          "latencyMicros": 118,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 21,
      "startIndex": 21000,
      "endIndex": 21999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 1000,
        "UNAUTHORIZED_REQUESTER": 1000,
        "INSUFFICIENT_EVIDENCE": 1000
      },
      "batchMerkleRoot": "d6f34cd19628cd103deee27f802011e7538c9ab127f5575bb42d008e585ec536",
      "durationMs": 180,
      "avgLatencyMicros": 144,
      "p50LatencyMicros": 47,
      "p95LatencyMicros": 156,
      "p99LatencyMicros": 1368,
      "maxLatencyMicros": 20158,
      "samples": [
        {
          "index": 21000,
          "testId": "req_poison_replay_21000_0d96",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "6fffe73f1c2b81502c00ae9c0d0763fb8be5768a6029d987a31d9bd14c196933",
          "receiptSignature": "20477deb8134b3fb4c5032454bc198972e8e19c31ce00f7cb9404beeafaf4502",
          "latencyMicros": 120,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 21001,
          "testId": "req_poison_replay_21001_3f96",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7d416c97d6c84cb1c779db5156f9d0c08ed6f2a216e0d0df1230f69a769cd446",
          "receiptSignature": "4647112e1d9480630522e10bdf9d71be00ca852a925a173df555ab018c3277e4",
          "latencyMicros": 65,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 21002,
          "testId": "req_poison_replay_21002_e065",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "8aad6e99ef411806f16343477193513ac2c9382218a85383f0db36493f80a7f5",
          "receiptSignature": "a89ca79478012b22bc1e348e7af9482165f8b91abb91c4cc441c7ceebcfcc70f",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 21003,
          "testId": "req_poison_replay_21003_5fbc",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "663b766e696ee351234ecf46d660c51be7021c4af771f48971dcf8fd8c672eb4",
          "receiptSignature": "ffab732e116fc479ab7b367f9ec9e0cb54cc9f8042a4adabfc2fdd702f9ae3a8",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 21004,
          "testId": "req_poison_replay_21004_6100",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "683cec038bab77e2fc377e2824b44aa8ab4b39c45e1ad498e84549bdc1125524",
          "receiptSignature": "db06302bbcf3b4f52298c5dbdc1ace1eb682a9ad2890b313cb5cbb6f1a510022",
          "latencyMicros": 50,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 21999,
          "testId": "req_poison_replay_21999_63d2",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "b7699e8444874a0802c5d92796e7dc8fbc945040097c36305748993850d9319a",
          "receiptSignature": "496f889fdd2d7a9671765a4aaab2e08ff9d3757ac0d0b5b174b4d7a5acf4585f",
          "latencyMicros": 44,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        }
      ]
    },
    {
      "batchIndex": 22,
      "startIndex": 22000,
      "endIndex": 22999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "REPLAY_CONFLICT": 500,
        "UNAUTHORIZED_REQUESTER": 500,
        "INSUFFICIENT_EVIDENCE": 500,
        "STALE_AUTHORITY_VERSION": 500
      },
      "batchMerkleRoot": "6f4706923556300a0d1d0cd8a847e78442a9dc8e2590df730f483b8e3e1b1405",
      "durationMs": 143,
      "avgLatencyMicros": 88,
      "p50LatencyMicros": 57,
      "p95LatencyMicros": 102,
      "p99LatencyMicros": 242,
      "maxLatencyMicros": 15510,
      "samples": [
        {
          "index": 22000,
          "testId": "req_poison_replay_22000_79a3",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7ae1406757b4bb9742984c8e677104c20902d0f215edd1c3f5b78485faab1886",
          "receiptSignature": "350103c1cfa4a1e8b7ac6f4c82f4adb420e476c3fc2c17c80b84ffea97bd663d",
          "latencyMicros": 137,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 22001,
          "testId": "req_poison_replay_22001_395d",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "e8f4785588975721f556995f2994e5299ff3de0d5634d6084f9687c8987872da",
          "receiptSignature": "4238cd3762bfa1777e9ef2571e383c924049d3cfe2eb9b3dfb438dfdbec259ec",
          "latencyMicros": 56,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 22002,
          "testId": "req_poison_replay_22002_13a2",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "7b0a72372fab31bb1fd49859faed26b89c2c01881a9596be3833f523f985b23f",
          "receiptSignature": "4e7bcbefcabae7b36f52eb4f91ae660482e92ffcc5f2a8091a882c53b7b64ee3",
          "latencyMicros": 49,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 22003,
          "testId": "req_poison_replay_22003_fbc5",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "4fa1dccec1b283e93030e1e2a4c0cc3a4691ec2dca3d721ab647e9b1d4010007",
          "receiptSignature": "f3e38a12cad318d281bd43b772351efc708733646753a14d48913f232d723691",
          "latencyMicros": 50,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 22004,
          "testId": "req_poison_replay_22004_4f7b",
          "category": "REPLAY_COLLISION",
          "subjectId": "atom-core-001",
          "requestedClass": "ENTERPRISE",
          "requesterId": "ATTACKER_ANON",
          "decision": "Denied",
          "violations": [
            "REPLAY_CONFLICT",
            "UNAUTHORIZED_REQUESTER",
            "INSUFFICIENT_EVIDENCE"
          ],
          "canonicalHash": "be7776baaf5991862e54e5fb92035f5a32698669ed53d8c6773ec862b898b076",
          "receiptSignature": "f033fe5d7219e33875ad236a886d867ea5d284a24b59c3eadc0d3eaa1bfd0792",
          "latencyMicros": 45,
          "explanation": "Boundary checks failed with violations: REPLAY_CONFLICT, UNAUTHORIZED_REQUESTER, INSUFFICIENT_EVIDENCE"
        },
        {
          "index": 22999,
          "testId": "req_skew_22999_b74734",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "f94134618448027e452910c7ebd0a0f356f71050229a423d063314d5feed1678",
          "receiptSignature": "ebb56e9fa799283a0db90dc3e8a0f08792041edfb42e2b6e53ad252cbb630aa8",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 23,
      "startIndex": 23000,
      "endIndex": 23999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "2f9c0d72b2adac560bc8a47fdf8987db4b18a1905d160a0022beb3370ab01e63",
      "durationMs": 200,
      "avgLatencyMicros": 119,
      "p50LatencyMicros": 59,
      "p95LatencyMicros": 269,
      "p99LatencyMicros": 1043,
      "maxLatencyMicros": 4035,
      "samples": [
        {
          "index": 23000,
          "testId": "req_skew_23000_d40227",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "ff0a9981da0c16a24dcdac6e17e3019918a8e880395ed1279e8942cd6c7af26e",
          "receiptSignature": "cbc2a540e442281f3918cd2eb0c4d0ce7c99f489127285802e082a8a2328328c",
          "latencyMicros": 489,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 23001,
          "testId": "req_skew_23001_f82807",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "2229ad84e0f5365ba1b22432a1aad4f7ab778f6acf010a26b6456279b597fe42",
          "receiptSignature": "a933f405fa3627f74004303c7c59ada62123390d186aec08f593eda67fd6a3c5",
          "latencyMicros": 800,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 23002,
          "testId": "req_skew_23002_e7f40c",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "c12fdd33d478ed4a70c5170aa13b38859af51f6c4f42dec1a324b802c9100568",
          "receiptSignature": "f104aec8167f69f5d39c2ad18bc7c57b0f81b536b9a54b4ca2ca6032152ab34a",
          "latencyMicros": 535,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 23003,
          "testId": "req_skew_23003_b08653",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "6dbe518d1ce40f72710b202cd38470a88769e3262e7a630a1de73cc0af5fdbc8",
          "receiptSignature": "bce46867a7b034813d28ba2a6f5883f0527f0281e8dd1d4a7800f916b4417257",
          "latencyMicros": 349,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 23004,
          "testId": "req_skew_23004_3d468f",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "1a33fa3c555996bbaab4163c29ab78733c7f8b93ed89d5f9e20c1d5e50ff0c04",
          "receiptSignature": "8c1cfb91ea82a4ed49b0c21ed7949f24451583ab4f03cf3be90e2788f6e8f2c1",
          "latencyMicros": 436,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 23999,
          "testId": "req_skew_23999_74a92d",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "fcfb354272fcfac5a8d48e94166e805f1437860a0317967ea6a119131ce0d3cf",
          "receiptSignature": "e003fc37c24c2486a754124b1113f4b3e80a13fa0674e928f82f5290302e6440",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 24,
      "startIndex": 24000,
      "endIndex": 24999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "4f6ed2544d535e733f7e94e771a82bfaa9675557f139ab1c4d63288417137a35",
      "durationMs": 273,
      "avgLatencyMicros": 182,
      "p50LatencyMicros": 190,
      "p95LatencyMicros": 269,
      "p99LatencyMicros": 370,
      "maxLatencyMicros": 3789,
      "samples": [
        {
          "index": 24000,
          "testId": "req_skew_24000_c1b8a8",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "9ec2db38573668a56966f941ba685b9d49fa5f7c36690e1be350bb58540ce447",
          "receiptSignature": "844e3ae67cb7a4298ec44383e2d42d5ae6b0881c05e3dc52ce60a265c859e5d1",
          "latencyMicros": 409,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 24001,
          "testId": "req_skew_24001_b5f2ff",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "058f6f682d873373e055f6433aba20c9da6943d5fc1acc12a8af6af08c73fbb6",
          "receiptSignature": "dac41dea1d568bf03811941a2a368b5cd71cd809dd6abd28b7cd4f23dfd9084e",
          "latencyMicros": 294,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 24002,
          "testId": "req_skew_24002_96e5a1",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "fc4fbb4794a5358ad51d12681c6db015c37449025453c569b0b1cb0543db7575",
          "receiptSignature": "70fd18bab727a3ee7c9b0f4929cd92e79499b6086263dd9ad41a4e4786803f99",
          "latencyMicros": 285,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 24003,
          "testId": "req_skew_24003_75b7fb",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "cbf8f4208e70f082ea69400cfc320120c1301a1ad61211e73668a2dd4281f9f4",
          "receiptSignature": "f9f291f82b387d60b5b613ee4e2d35cf888f709968975fa2d4c5e7c8a9c0e338",
          "latencyMicros": 259,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 24004,
          "testId": "req_skew_24004_abd39b",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "a7e697e7ee571483439bf09295dfcc399245a7faab7f957bdab9b25f7c4b4b6d",
          "receiptSignature": "248409afdfc2c7be2fc9e9464bd4e01babff6e776fdf7c37960b6e0695c7d5df",
          "latencyMicros": 254,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 24999,
          "testId": "req_skew_24999_0b1ead",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "67898e9be2c06f28d193a75f0134ee3093da709e10a0ec02b612c94cd202ce81",
          "receiptSignature": "ccd0de4d6dc87ce0690504681120d3a4361a31e8245b90e9b72653e75fab81b1",
          "latencyMicros": 51,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 25,
      "startIndex": 25000,
      "endIndex": 25999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "4f9aa956f9a981a1f3b2cb83b2eb6a3e78c397b0dd7f3c84252cfc3bc15b8718",
      "durationMs": 274,
      "avgLatencyMicros": 192,
      "p50LatencyMicros": 175,
      "p95LatencyMicros": 278,
      "p99LatencyMicros": 745,
      "maxLatencyMicros": 8677,
      "samples": [
        {
          "index": 25000,
          "testId": "req_skew_25000_2416d2",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "9b835fc393851864f3c809bc8d44801bdac1affdf8f384f0e5ef47a99ddab159",
          "receiptSignature": "6f7b5501ccc456afbc348c3c7e41b39a793bf5cb31db48f5f81f812510caf7c4",
          "latencyMicros": 411,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 25001,
          "testId": "req_skew_25001_6e5ecf",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "429cd790c559f63e33fc1e8f491a0b9ac3cef93c1bd1374a8ce796fa5da6d6ae",
          "receiptSignature": "eb7ef1a37eb31ccc44d1f1213dc98c0e9cdc707f321a877bb947360bb2d9cc5e",
          "latencyMicros": 255,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 25002,
          "testId": "req_skew_25002_03a7f7",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "47efcdeb5673e9e1a2ea2938536994655f1725d7492ff1688d21f70022482765",
          "receiptSignature": "66723a6bb0563e8f83751f3be14baa11fce3dce690e8414d3d643326bc365b11",
          "latencyMicros": 303,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 25003,
          "testId": "req_skew_25003_6b8a9e",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "6c86dc82550736567504b8493e35fecf7ab128fe1901661a9aefb50e74b517ee",
          "receiptSignature": "58d6146ae5716da8db5792f5c2f9f4e14570bc637f6e89dc9dea1b9a428fb5eb",
          "latencyMicros": 274,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 25004,
          "testId": "req_skew_25004_4ead6f",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "eafef56032edb98253b8e5d3d1ab7f73bcf26169d62f5043947bc16c89de1b5f",
          "receiptSignature": "ba2914fe9625ec568dc40f17ef09501f0433b48fdd4466bbff45ad73df4bcc7d",
          "latencyMicros": 236,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 25999,
          "testId": "req_skew_25999_bd966b",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "4cfd0cfe5213cbd45188bf2648e71f273d556abce4108cfe43cf2148b8e7418b",
          "receiptSignature": "39fe69d2496e5f9cf9c5c579f1d2bfc0e6c5a96929163049a6d9aa1228900e1c",
          "latencyMicros": 170,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 26,
      "startIndex": 26000,
      "endIndex": 26999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "835c39bda86161a9efc0d637e3fab6508fdeaef4e532ee55bdc8936ebecfd51c",
      "durationMs": 178,
      "avgLatencyMicros": 114,
      "p50LatencyMicros": 58,
      "p95LatencyMicros": 196,
      "p99LatencyMicros": 485,
      "maxLatencyMicros": 7578,
      "samples": [
        {
          "index": 26000,
          "testId": "req_skew_26000_8e9d0f",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "bc595a9688acadc6c2c42f037ec12d623a782b8f4eac7d4129524465e0f2718a",
          "receiptSignature": "072d8bc0edb514489ba247dbc1d7d9352d78c7777e6eebde486e456dc29193f1",
          "latencyMicros": 124,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 26001,
          "testId": "req_skew_26001_28e00c",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "148f1af81c684f8b6d7600e81750a653d8bd11ae6a9233559a3b20685b3a6bc9",
          "receiptSignature": "7de1d52f47cc5c3ce92b120d51a8a616caf3148e91f81bc2fbcd23d8cc36d3c6",
          "latencyMicros": 64,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 26002,
          "testId": "req_skew_26002_405e11",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "280005d43897a76717e487f96af249b13fefb9cf430fb2c2ac7d8a813d3a8fb4",
          "receiptSignature": "1855d17b19846ae44e353ccf32cc371ad9f900eebc319119eb381b4b68535fd6",
          "latencyMicros": 54,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 26003,
          "testId": "req_skew_26003_d395b8",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "67a4816181adb15f904c620e4b50fafe7fc318069e7fe930c27f5cfe8a4b578d",
          "receiptSignature": "76201a099d70423a8674078dd7302937832db5a103415f998e8c92dec6f62cf4",
          "latencyMicros": 57,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 26004,
          "testId": "req_skew_26004_032518",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "e93785cc7c0829ddd26c1584ce495d270888c3b4cb036550f539294a1c172f4a",
          "receiptSignature": "db6027c46e800ff2cca6a31d063a54b3de453d2aef16951a25892ad094b691ae",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 26999,
          "testId": "req_skew_26999_7de928",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "8829797a80152563af13c2fc84d471920431020ca3c6bee04ada850624f3ff5f",
          "receiptSignature": "38d2440d84d3cfd7b4c6db05c4c2cf7c308bc2ccf7731c8443b05a1a8e5b92b4",
          "latencyMicros": 157,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 27,
      "startIndex": 27000,
      "endIndex": 27999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "37f677cbe8dac73c85cad6f51b5e210832fede91a422409921a55dfcf2269dce",
      "durationMs": 202,
      "avgLatencyMicros": 151,
      "p50LatencyMicros": 56,
      "p95LatencyMicros": 199,
      "p99LatencyMicros": 3140,
      "maxLatencyMicros": 16975,
      "samples": [
        {
          "index": 27000,
          "testId": "req_skew_27000_ba6a9d",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "8b7d9c046d18be73397da10055b5bae9c839cc8cee8d8c692742fa27ddcb3a5c",
          "receiptSignature": "ce8b48ff820c99630ef4b69db23f2a016917fff54cbe551b2b4956e7418a8355",
          "latencyMicros": 297,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 27001,
          "testId": "req_skew_27001_a1628a",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "05f5855e226895654bac0071d79f32837c27131c433701a456dfd50c2a5851c1",
          "receiptSignature": "8b42a3e4a3921d29a5601af42b78195263bf78cb109e2ee3be6eb092fdd1f987",
          "latencyMicros": 229,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 27002,
          "testId": "req_skew_27002_a246e6",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "cd368bd791eda62a0fa92a38a2054065b78e6e1a78431d8c8e4b714ffe5e3869",
          "receiptSignature": "43aac5b928d63043133b2b1e51a124784b1f5113afe6f1b844b6f228f9fdaaea",
          "latencyMicros": 200,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 27003,
          "testId": "req_skew_27003_910c4c",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "dc2fd83c5ebbb460f6a1ae57642da66a8193cf0474dbd5c669413102dc3c792e",
          "receiptSignature": "2f27ad3b1d40a905de0c4ee1d3fe5e8a1b1c2acf8e84ed37c2fe321fd84a55f8",
          "latencyMicros": 236,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 27004,
          "testId": "req_skew_27004_4e4cf1",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "c06adb9e5459aa96fbf07ff46468fd40fad31adda89b68d154d099a07c088ef4",
          "receiptSignature": "9f6aed667c76c680b4af5c09b0b2a00bdcf2eb626db3024250b43bb3ae1e3d07",
          "latencyMicros": 198,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 27999,
          "testId": "req_skew_27999_299a77",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "2c5f0fd0beed39c5238832d66495f425dc55729641cc18944d47d1cb41384b14",
          "receiptSignature": "ec2dae8dc04895a381d61112d21bdca27c955236dc522f59bcbdee594505d391",
          "latencyMicros": 54,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 28,
      "startIndex": 28000,
      "endIndex": 28999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "207e127a4eb7783caf5a8fa36b41e7ae4ed1d7c3fad80b9944d1517ff499311b",
      "durationMs": 133,
      "avgLatencyMicros": 78,
      "p50LatencyMicros": 54,
      "p95LatencyMicros": 110,
      "p99LatencyMicros": 280,
      "maxLatencyMicros": 3983,
      "samples": [
        {
          "index": 28000,
          "testId": "req_skew_28000_0982af",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "22ae7e778929aba8e1e261eeae3ce369862db6ffac52bfc5be24651fa1e5045d",
          "receiptSignature": "303db7629f0ef27232668527df95c679d8736e3e3445fadf7e13721a6cc3a84e",
          "latencyMicros": 122,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 28001,
          "testId": "req_skew_28001_647562",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "643256fdb01c94c5db1d4d803765eba2ee0eaa94ca717bda72f243de6b8cfa59",
          "receiptSignature": "4facb17b064fc3b07754222746b11235d0347ffd4cfbd6db90b9a1f0b70b4624",
          "latencyMicros": 168,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 28002,
          "testId": "req_skew_28002_ffd995",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "e8acf041a1aa5cdb0757fb3105130ab27bd803af8e0e82be4d9e03b49bc4aa7b",
          "receiptSignature": "32c662bb54cf66844561329384deb332642ea72fbc453e5e18ff5250043ddcb8",
          "latencyMicros": 67,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 28003,
          "testId": "req_skew_28003_ffca6d",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "3813d9f69a6fcea3fa56cbf8996308e6f8375e594825abc5c7baadd6aa969437",
          "receiptSignature": "80d0ae828bffe05884ad93432e1a7d2491b011a557d23f1aa07e2cfabb68a007",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 28004,
          "testId": "req_skew_28004_84da98",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "e4bbab4d4212593e6898a4d58c08a81eeb6d4483f30bea1ea7578872b385b810",
          "receiptSignature": "35363563364ffc8ef31c16cae74f5ff4f5b5b7d701f466f84fa5b6ee91ff6f1a",
          "latencyMicros": 58,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 28999,
          "testId": "req_skew_28999_0d4f29",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "9e1d7ffa75a145edfe4801c6a985a4e0dee6418bd14306c682901f365b61f120",
          "receiptSignature": "8d32e1098df25fff465e19b52942ac7a910c50828700f6a136781d6077681940",
          "latencyMicros": 83,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 29,
      "startIndex": 29000,
      "endIndex": 29999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "STALE_AUTHORITY_VERSION": 1000
      },
      "batchMerkleRoot": "6775474dff6966ada27017c4854afb61d36964b994ccaa78736ff9776cc6b522",
      "durationMs": 188,
      "avgLatencyMicros": 143,
      "p50LatencyMicros": 73,
      "p95LatencyMicros": 228,
      "p99LatencyMicros": 782,
      "maxLatencyMicros": 18248,
      "samples": [
        {
          "index": 29000,
          "testId": "req_skew_29000_7b8a39",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "c1ceb65f5d5c3a89adff58a4d3aaaf21cf313a0c687ebe9b3da1419a21aea052",
          "receiptSignature": "a42933cf811f481366d209954564fdd8603cd3bcb583b07234882b0f0f100c8b",
          "latencyMicros": 297,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 29001,
          "testId": "req_skew_29001_c8259c",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "4b5b9a4b426ef3653c1f7c95ad2e39debe0aa03f8f49708524371ca61cf4a6af",
          "receiptSignature": "1c6dee5e2a4f4c6c9b360d65af6296a69ab7a89895a3f9bf054ec486c2c9037b",
          "latencyMicros": 149,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 29002,
          "testId": "req_skew_29002_b1aea8",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "1f29ce2e1b8728ab7a76aa7dbda87356fe7670c8e0f51cc3de90f8387478376a",
          "receiptSignature": "77b7cdcba89c74259c19159e8ca6691aa5a903e4d2e095335df74488b7f0e951",
          "latencyMicros": 74,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 29003,
          "testId": "req_skew_29003_d9f367",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "b680d2122ecacaa6bef1655142f87807535992c1f1a184af531554c015a7067c",
          "receiptSignature": "c054f0e091c0cd2db0adca33a00b525271d357749e512fe0ad2bb3733cde7bb8",
          "latencyMicros": 85,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 29004,
          "testId": "req_skew_29004_57dcf4",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "23550524c655273e2b526f0340263f36a40d5ed6064f6024781f69c428aadcf0",
          "receiptSignature": "1ed84afa798fb12e9bd233f8ffec0b49a1156205efa76942fb98b7c384068482",
          "latencyMicros": 67,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        },
        {
          "index": 29999,
          "testId": "req_skew_29999_7a9856",
          "category": "EPOCH_DESYNC",
          "subjectId": "atom-fact-002",
          "requestedClass": "FACTUAL",
          "requesterId": "RACE_WORKER",
          "decision": "Denied",
          "violations": [
            "STALE_AUTHORITY_VERSION"
          ],
          "canonicalHash": "476341550b32334d548ed556826e9f72d0fa8555f91f635cc2dbd6e7c1e811ea",
          "receiptSignature": "d41c2ef3220d7bcfb8a00cf2c12bb1853cfe8f4bb226ace07e8cf387c52e48cc",
          "latencyMicros": 54,
          "explanation": "Boundary checks failed with violations: STALE_AUTHORITY_VERSION"
        }
      ]
    },
    {
      "batchIndex": 30,
      "startIndex": 30000,
      "endIndex": 30999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "DEGRADATION_WITHOUT_REASON": 1000
      },
      "batchMerkleRoot": "6b718fb64aa9fd937a5e97c7d22c55a93de7a48a532688c0326a50a55c337faf",
      "durationMs": 134,
      "avgLatencyMicros": 77,
      "p50LatencyMicros": 62,
      "p95LatencyMicros": 98,
      "p99LatencyMicros": 221,
      "maxLatencyMicros": 5097,
      "samples": [
        {
          "index": 30000,
          "testId": "req_deg_30000_05b0e6",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "c3c67077ea967cf7621936082b1330e7af1bce747c137ec5f3779c7812d694fb",
          "receiptSignature": "0679526baf8d1cee06289514943ae304d8a0a530e8adacd5048ecb6d8b456659",
          "latencyMicros": 433,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 30001,
          "testId": "req_deg_30001_9cb5ea",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "2eefebd26d027cd707abdc0c5b530b6e14b5137181db021ded1e6d284aa60ce6",
          "receiptSignature": "5c5429fe3a464f4c3090136b1789f83cfa13661f02a6f38f391076a9fe6e260b",
          "latencyMicros": 141,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 30002,
          "testId": "req_deg_30002_81a368",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "083961f632d18a7cbf8da059c667169a2644f8251e35f986f7fcb0500c282c2b",
          "receiptSignature": "f75c194c03a7d8f5b777021034b50793712a36d698c1c370e67dd852610da2d9",
          "latencyMicros": 65,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 30003,
          "testId": "req_deg_30003_7f5768",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "1cfdcaa4059a47542c0ae865e10bb2a09b2ad516c8363c567d4e4e1742b68e60",
          "receiptSignature": "887e07b0b9dbfd6dba438c842549ef15ad4c0de0d87f1e8b643f566910ba2574",
          "latencyMicros": 58,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 30004,
          "testId": "req_deg_30004_ce8546",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "2656f27570e9740f79929bad8506edffe497e02b0fed1e9554a4aee09ba3117d",
          "receiptSignature": "725e3c6b5e1825318cbaed40b458b09b7bb3ca299e00dff37de7e72abf264f9d",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 30999,
          "testId": "req_deg_30999_26351a",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "c5b4fe5f69aa074e34f497d4c31deec87036341d9acb5caa8d7fe36fe0375460",
          "receiptSignature": "c9f26056e1fe76fd25c6a8f0194924c7012dddc45d2ca2a5da6fcb7e57459630",
          "latencyMicros": 74,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        }
      ]
    },
    {
      "batchIndex": 31,
      "startIndex": 31000,
      "endIndex": 31999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "DEGRADATION_WITHOUT_REASON": 1000
      },
      "batchMerkleRoot": "1ec7c04cfb0c7d69148a41061972c8c65db4fff505ee6b60c1642c2f69a5e23e",
      "durationMs": 253,
      "avgLatencyMicros": 176,
      "p50LatencyMicros": 53,
      "p95LatencyMicros": 337,
      "p99LatencyMicros": 3377,
      "maxLatencyMicros": 13699,
      "samples": [
        {
          "index": 31000,
          "testId": "req_deg_31000_8f9c02",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "567e16bddd9f6e16bdd7cfe62bee95ee70fb3495ad2a63f2417570d6aaf2dad9",
          "receiptSignature": "bff606ff36df52beffd9d5f1c7a52526f614e61af5cfc41c8c0e9bfe83f0f9da",
          "latencyMicros": 181,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 31001,
          "testId": "req_deg_31001_3feb84",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "7ec5abf7ab6d00236753fed6b31318516d01bd43671056d77e5697a0c2cf5217",
          "receiptSignature": "27abc63de8ac59f4224ba69f8dc08e5d50925002681948e796f8976ffe00f410",
          "latencyMicros": 105,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 31002,
          "testId": "req_deg_31002_1ff39c",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "3ffe364bac3b2e8b9940342d081ec9cc178e50573aea8c4cfb28e4f121fbcae0",
          "receiptSignature": "bc83a57d233a8f5165f379be85645fb282db60e13bdd4d78a0be10aeb464c7ec",
          "latencyMicros": 238,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 31003,
          "testId": "req_deg_31003_11aacd",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "638bf0a05c81a5e8e30227e374317df127702d7fa1f11e12060a186981c1dad3",
          "receiptSignature": "d0c7ee106f947fef9a005858237ac14fbcb84f11353a2122a4ac3a48a6b4cdaf",
          "latencyMicros": 160,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 31004,
          "testId": "req_deg_31004_e2c7fb",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "4f5de8ff7164a5a4e3abde5c54309cb29539deccd0c9eac6997926dd22835f46",
          "receiptSignature": "f3dacc2575a81d48e590735a1ec58500ab7b3f6a208ada641ac01837cb922851",
          "latencyMicros": 127,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 31999,
          "testId": "req_deg_31999_766490",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "365bf195d552678ae491b5e898fa267348943a40926533ae947efd1e72989351",
          "receiptSignature": "bc5e3c91445925ef0f7d417048b37846f0423b1bf0c2100c008927f88ccf19a7",
          "latencyMicros": 52,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        }
      ]
    },
    {
      "batchIndex": 32,
      "startIndex": 32000,
      "endIndex": 32999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "DEGRADATION_WITHOUT_REASON": 1000
      },
      "batchMerkleRoot": "06ff32d20feeaebea427c9d6a79f8c42c19f95c6625ba9c50890dfa25b604432",
      "durationMs": 125,
      "avgLatencyMicros": 92,
      "p50LatencyMicros": 46,
      "p95LatencyMicros": 179,
      "p99LatencyMicros": 755,
      "maxLatencyMicros": 4217,
      "samples": [
        {
          "index": 32000,
          "testId": "req_deg_32000_b4782f",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "35af315710cedc8bf514f02c2a1e973cbf2cfe7732e860d105518adc30583355",
          "receiptSignature": "05d2bfcb95c65ac402e830a88ed5955e70eceb5bad3133b4da5917a9b5cc4cc6",
          "latencyMicros": 140,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 32001,
          "testId": "req_deg_32001_504e22",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "d401837d3b3319bd5cb1001c608d4f1a69d30d47f01cb4f47e408a9c43e16027",
          "receiptSignature": "f872f51daa10a551cfa2902e6618c218cf0c835dc260dd607241d7d792234ed4",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 32002,
          "testId": "req_deg_32002_e36242",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "0f7f016dac653ccb4b5f4c2323743613d94572dfe772388319840c350036e8a1",
          "receiptSignature": "2a2eac8e2d7f2cd002af860faa6fc4fd4808e995681f4f0fd97c19bb458ad551",
          "latencyMicros": 46,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 32003,
          "testId": "req_deg_32003_42a1fb",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "9390013cdb4fa2073b3da3b52d25f487b48c862a9ff4d1348ed2d20c3d3dc7d2",
          "receiptSignature": "236dd04ac3ecf3b9797b3a76bebb55313d194b55fd23565cceba535fc80c6f73",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 32004,
          "testId": "req_deg_32004_572a32",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "942c73cf9ac3318dcf8c79aa7f9c8cc5b9956b6bbc17f0bdfcb30e093275703d",
          "receiptSignature": "1ca0d9c779ab05f19203e4d597db9c3c7ae535866dbb0bc291a25ea9058b77c9",
          "latencyMicros": 46,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 32999,
          "testId": "req_deg_32999_6a79b0",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "19d8fe1a4af882b687f3ea552642d6fec569f0bc95c8fdf02c5beedf2e6e5c97",
          "receiptSignature": "e5e400256f49c25c44e82e389b34909a53eac18519e17326e621a45cbc6ffd6a",
          "latencyMicros": 72,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        }
      ]
    },
    {
      "batchIndex": 33,
      "startIndex": 33000,
      "endIndex": 33999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "DEGRADATION_WITHOUT_REASON": 1000
      },
      "batchMerkleRoot": "3ee08e3cd2bea7102e3e3acd18cd5c7b43879f1c06a314214706ec6fc6b34f3d",
      "durationMs": 157,
      "avgLatencyMicros": 107,
      "p50LatencyMicros": 46,
      "p95LatencyMicros": 109,
      "p99LatencyMicros": 306,
      "maxLatencyMicros": 15017,
      "samples": [
        {
          "index": 33000,
          "testId": "req_deg_33000_4e57ce",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "90abbedefd892d7b76dcbbb8e30446bf81e5b6b782c0d2cfb61cf4f8fe333add",
          "receiptSignature": "18d40c0cb4c8621f6caa6a7a7ec1805293a36cdab6e218464a1cdfb24d28358c",
          "latencyMicros": 164,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 33001,
          "testId": "req_deg_33001_790d85",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "0d053f3c4b1424437ead6d000c8c5d378365b6eef838a05b620ec5bddf0d50dc",
          "receiptSignature": "528f307706e3c81fee565b87865a1fbcad9ed7a48009777b2329af632b27c1ea",
          "latencyMicros": 1107,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 33002,
          "testId": "req_deg_33002_8182d4",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "7410cb4766a7e94a707d4e5a1a9cecf9a2bccdbdb8dc11c5b1686456cd1bdcea",
          "receiptSignature": "9d2e73fe17c49295cef040445b4cfda53def76f4470edde5816e22216c4761ab",
          "latencyMicros": 250,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 33003,
          "testId": "req_deg_33003_cad832",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "07d4a9a1df79cd7cd2189f9b15f2c9e93b946888872ee12b5cde8e94085d65ed",
          "receiptSignature": "5aed09488344583e17099f516739109addd7772499a18d9d8fce2476f254ee85",
          "latencyMicros": 192,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 33004,
          "testId": "req_deg_33004_74e84a",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "954f10bc938ee1a55e55e14cb0e520f314411b69ab8d3b3ef1a74cd399a5786f",
          "receiptSignature": "f79d1a27613040b4c552c7e2bcde0eb79b3330eb3289b4e89c994f0c47ecf069",
          "latencyMicros": 146,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 33999,
          "testId": "req_deg_33999_4722cd",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "c76b9c14b8c896c76e90cf0b554d07007097ab9dda950852caf7b70098327816",
          "receiptSignature": "a2d33ed765967e6580ce44bf6af1194562cb19b4c2ca369a0b4c98f9d4f4104d",
          "latencyMicros": 54,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        }
      ]
    },
    {
      "batchIndex": 34,
      "startIndex": 34000,
      "endIndex": 34999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "DEGRADATION_WITHOUT_REASON": 1000
      },
      "batchMerkleRoot": "b3082f3e2a2ff91c35c574df6c444a79d7b784507f1c0ed31885a223262b246a",
      "durationMs": 249,
      "avgLatencyMicros": 173,
      "p50LatencyMicros": 46,
      "p95LatencyMicros": 82,
      "p99LatencyMicros": 3207,
      "maxLatencyMicros": 35640,
      "samples": [
        {
          "index": 34000,
          "testId": "req_deg_34000_35203b",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "4a9ad1dd4e4dfd62a69c72ce244610bd7b805b8b4b8d853e41819ae10d9b1ee0",
          "receiptSignature": "f0ae3a4d5bc86e5e758d499e8d81e4159c6a108449fbbcf5e3362acad0895861",
          "latencyMicros": 164,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 34001,
          "testId": "req_deg_34001_d69af6",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "bacc45ead413324eb4ab8f1b6644ce836a2969c26b01558fd8ef91c2686a1b48",
          "receiptSignature": "0563ffda23acb8f48fcdf09b22538e531e2ad1309680f37546e808be0d0c33cf",
          "latencyMicros": 77,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 34002,
          "testId": "req_deg_34002_abd942",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "db94ed622823f11a033b08becd6b9de776e4d4f7826f222e29b743d23eb5bf2b",
          "receiptSignature": "31997a7d289a2cb0d77a9a3a049edc3a9a20eec03b702b55c904f3d47339fa30",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 34003,
          "testId": "req_deg_34003_42fea3",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "4d1e8d2cde6a0b2d3e925c7d5e0cf89dddd8f227f0e78583b5bcf4cc58144519",
          "receiptSignature": "007578cd9ce8819db0d532e602ce5c5ed5fad37c001f87aa2d6b5ec6f122bf16",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 34004,
          "testId": "req_deg_34004_ed0dea",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "1cae0efc2475c65768be33d6c87ac06d49ada354da2a637abc6d5a6a61175eaf",
          "receiptSignature": "c11925cfc4354f502a73facbf39973a7a704ee90ced48cc2649b0e895c33465e",
          "latencyMicros": 52,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        },
        {
          "index": 34999,
          "testId": "req_deg_34999_186e1a",
          "category": "ARBITRARY_DEMOTION",
          "subjectId": "atom-core-001",
          "requestedClass": "WORKING",
          "requesterId": "ROGUE_OPERATOR",
          "decision": "Denied",
          "violations": [
            "DEGRADATION_WITHOUT_REASON"
          ],
          "canonicalHash": "66a80bc30bf4047abee20cb43a2354f242ae6c59e19c2ade8761ec70ef2f3c16",
          "receiptSignature": "6aaf8971cfc8ebaf3c65e86191ba4c8429f4d2d9b711ecc44283d5d0de4b1203",
          "latencyMicros": 42,
          "explanation": "Boundary checks failed with violations: DEGRADATION_WITHOUT_REASON"
        }
      ]
    },
    {
      "batchIndex": 35,
      "startIndex": 35000,
      "endIndex": 35999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CONSTITUTION_VIOLATION": 1000
      },
      "batchMerkleRoot": "fa7dd1e695764829304f1c72bc401918ac92488784f150752ef3a6c60ffae800",
      "durationMs": 273,
      "avgLatencyMicros": 168,
      "p50LatencyMicros": 59,
      "p95LatencyMicros": 122,
      "p99LatencyMicros": 3257,
      "maxLatencyMicros": 12442,
      "samples": [
        {
          "index": 35000,
          "testId": "req_const_35000_f897e1",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "DEVELOPER_LEAD",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "7c3aa094cbe8bf418ac3edaa5ce97e9e51834c255f0fcec5520c66d09bfb7e28",
          "receiptSignature": "2965fb392f3c4735ca789283887c729212ef419449d1dcbb92c090d61a0071dc",
          "latencyMicros": 371,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 35001,
          "testId": "req_const_35001_aaac10",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "6dc222cd5e87ebea972921d9fb33ec12c952b28b0263469611611b56306e030f",
          "receiptSignature": "0ca931d9247113e2005d69a05fed02dbf16d2b27a239941b59f248862288865e",
          "latencyMicros": 159,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 35002,
          "testId": "req_const_35002_f6e58d",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "SYSTEM_OVERRIDE",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "477622370e9138c73178e987c4ece1bf8a4afddb8bd8844a7dfe08b90f30273b",
          "receiptSignature": "16ddd3485215471c93a54ef44e1e304286a5f9e3f36e2f13fe356d4f3493ad6b",
          "latencyMicros": 82,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 35003,
          "testId": "req_const_35003_81983b",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "beb6ea1c50ed362f11ded867b7fa41a52433fb588cec2f5d546f1bd6a6b6bec9",
          "receiptSignature": "18502a7ed8177ad5e34bf87cad053d83f6e1065503e01af91a0744d40f7d5a62",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 35004,
          "testId": "req_const_35004_a05787",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "SYSTEM_OVERRIDE",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "51d211a2294e75c405876330513bc48c12a4211a331fd42995f13c7273708330",
          "receiptSignature": "fc264c8fbdb9ba848c0938205ca51fd70f8e3ff7d5bb80615410a72a7e331527",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 35999,
          "testId": "req_const_35999_f39996",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "DEVELOPER_LEAD",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "8a4d8f111f9c8d08e308d8b05cefb1c9edf0173aa892778d8e87d8b4cc427e59",
          "receiptSignature": "cb9de583fea19b931758b4805e1530ac4c1be1aee2c33833e34277338d6c79b7",
          "latencyMicros": 62,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        }
      ]
    },
    {
      "batchIndex": 36,
      "startIndex": 36000,
      "endIndex": 36999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CONSTITUTION_VIOLATION": 1000
      },
      "batchMerkleRoot": "95adcffdf8318f0e3e1a06c4dec047dd7a26d4216911e4d8533045947b8ae79b",
      "durationMs": 264,
      "avgLatencyMicros": 167,
      "p50LatencyMicros": 58,
      "p95LatencyMicros": 214,
      "p99LatencyMicros": 3936,
      "maxLatencyMicros": 21945,
      "samples": [
        {
          "index": 36000,
          "testId": "req_const_36000_433692",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "5cf04e1c4852ea4ede9b42b8ac165abf0fec7b3a5f00e9907819a93e1b0c5fda",
          "receiptSignature": "033ac9fddd85bee7fbd5dd86308ab0f20ec7dcb15336422003e6aab4277a29a4",
          "latencyMicros": 149,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 36001,
          "testId": "req_const_36001_0fb952",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "BOARD_MEMBER_1",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "b1a3779cbe407663e1287f0591435fc85d2cecb06e29678397411d6ddb6749a0",
          "receiptSignature": "1a17e7390ba6db26d39cc1a9f0cded48d99b357d99e8793c56541c0eb270688d",
          "latencyMicros": 99,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 36002,
          "testId": "req_const_36002_c11956",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "8d514fe631ca3b33315203f59bcbc2020ac618e097c07c70e985bc0e8fb86dff",
          "receiptSignature": "3c7fb5c71165b4c07a9318f71dd1329cc2ef4a2d34c2e5b65a9fc8d92afa25d1",
          "latencyMicros": 108,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 36003,
          "testId": "req_const_36003_b3fdef",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "59fa6db3feac84a228ddbdefa93ebe2b2aeb006eae35fbc416d43f17f86d99d5",
          "receiptSignature": "13bfad55dedbf4f751f6232c1e08e771acecf6a622a732f88636bc8fb97270a2",
          "latencyMicros": 86,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 36004,
          "testId": "req_const_36004_6371a5",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "d3f43cb16657514fa780d8bf39c4ec096441da9f0985d3bda9d487c602f4566c",
          "receiptSignature": "19ae4f727912e0998c504c3444f560e3b93afba45cf9167c4ce365f32d4951a9",
          "latencyMicros": 113,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 36999,
          "testId": "req_const_36999_9553b5",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "DEVELOPER_LEAD",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "3b3e2c20214b6fda26b3093fc249a71eee7bd0fe4c23d0dd750d92ffd5f8587c",
          "receiptSignature": "2cec2a9225905c26595e828a036b2ee3ec2d6c5017811be519f45d19a4faea74",
          "latencyMicros": 76,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        }
      ]
    },
    {
      "batchIndex": 37,
      "startIndex": 37000,
      "endIndex": 37999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CONSTITUTION_VIOLATION": 1000
      },
      "batchMerkleRoot": "26a022b939790a1645d41a4a39a8602fda1e659ae19c5fa9c200a1f21e003865",
      "durationMs": 227,
      "avgLatencyMicros": 153,
      "p50LatencyMicros": 60,
      "p95LatencyMicros": 229,
      "p99LatencyMicros": 802,
      "maxLatencyMicros": 14820,
      "samples": [
        {
          "index": 37000,
          "testId": "req_const_37000_bb4097",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "SYSTEM_OVERRIDE",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "77f4cb6d53eebabc5934cfaa0aceefd4e06f4f35c34e8de4ed0916df9158d477",
          "receiptSignature": "06587b7696cd536036365ea327acc4e872c3bdb9241dd205715718d29826a9c8",
          "latencyMicros": 157,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 37001,
          "testId": "req_const_37001_f37324",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "bbbb5b36999d9e914d27572380b8967f184348aec0ebbbfa92a864024e94f12c",
          "receiptSignature": "67d808434fd5421ba65d1021193e5f494f9fcc760ef2f5eba94b01dacaee2ed4",
          "latencyMicros": 84,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 37002,
          "testId": "req_const_37002_4cad87",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "SYSTEM_OVERRIDE",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a91aafd618600c21d526492b0c8c0de5c68156dfe785ccbeaf5a1bf99c24ef03",
          "receiptSignature": "7bc62ab12d1615863d7a79b943f12cc2b3e92cb9e27952929e3028b93017b3dd",
          "latencyMicros": 66,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 37003,
          "testId": "req_const_37003_de73f9",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "58ffeeabccd2e5cef8756e6b1f0a656b1a31b5603999d9c5c63b7bac4691400c",
          "receiptSignature": "2588643a9d2b42df4f77e9eca5107aeae97c066af22f4cb9b991a82c13e05960",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 37004,
          "testId": "req_const_37004_9d7bc9",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "39248de211c737b29a7a99d883d17eeb9bdf828fe3527430259ce5f2b92450dd",
          "receiptSignature": "8e74be6be2b4dad487a15889863280d1a34f194fd5e51cdaa1b97ae205795b83",
          "latencyMicros": 60,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 37999,
          "testId": "req_const_37999_8f455d",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "02f1498d727be1867bc451ef8b0515446ad543d5c1cce0ef88f779f8c26ecccf",
          "receiptSignature": "e27a065f8365dc2daec76369b59ad7b89bebc43dcb4ab2eb6d657cf0a49ca3a4",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        }
      ]
    },
    {
      "batchIndex": 38,
      "startIndex": 38000,
      "endIndex": 38999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CONSTITUTION_VIOLATION": 1000
      },
      "batchMerkleRoot": "4af1026bcaabac31489774977ceea5464ee49b8baab7ffa4e25802503ef07043",
      "durationMs": 216,
      "avgLatencyMicros": 131,
      "p50LatencyMicros": 55,
      "p95LatencyMicros": 107,
      "p99LatencyMicros": 3115,
      "maxLatencyMicros": 15073,
      "samples": [
        {
          "index": 38000,
          "testId": "req_const_38000_a06d75",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "DEVELOPER_LEAD",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a2f7c8ccc839fceb3f3aa704ea0aa4471ceaf78f81c4c166a3e9e5cb780fa96e",
          "receiptSignature": "421d1eacf6916d38e1606826f59e54719fcc704bb44044ea71dd210c71e53372",
          "latencyMicros": 216,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 38001,
          "testId": "req_const_38001_2aeaf2",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "ROOT_ADMIN",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "f0cb4691b80a7a6e9d431925194c222a32a923c3d24506179bb4d78830717794",
          "receiptSignature": "1682856f800e48d844895162267b8702cdeca35977acff0184140b464f66d1ac",
          "latencyMicros": 86,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 38002,
          "testId": "req_const_38002_cb027b",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "DEVELOPER_LEAD",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a031b6ba9d33d874b31f8e4d8afc54c7411c05e10919aaa442c8057c24670275",
          "receiptSignature": "2e541be8a328f6432cb27cb2341db910cc609a5f62fad5677a3520e1c25b0b7a",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 38003,
          "testId": "req_const_38003_048149",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "0a6783a84f330975f893929db911665e595ff2d94eae2a63b14c35a67932beba",
          "receiptSignature": "a74d198400dfeada3e328859a0282561d465d9d04d8e73ebed3bc8a96172c149",
          "latencyMicros": 56,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 38004,
          "testId": "req_const_38004_45fa25",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "63488956380c18d8c1472465ddc304ec396f23ccdefd871d6f63bbaa25724a56",
          "receiptSignature": "7f85f2fc9cbbdec162a2cf81109dd1f53fb02d9dd05c95009b9173f1bc384f30",
          "latencyMicros": 55,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 38999,
          "testId": "req_const_38999_2e4a34",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "SYSTEM_OVERRIDE",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "0fee2076684d443abd6070cafed6e33ecca73bd7ee63943096527ed7cc9377e9",
          "receiptSignature": "2d8dc1852fbb6f05ac9ac81de7a10be15702c252fdde6763fa058bf1a36ec204",
          "latencyMicros": 58,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        }
      ]
    },
    {
      "batchIndex": 39,
      "startIndex": 39000,
      "endIndex": 39999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CONSTITUTION_VIOLATION": 1000
      },
      "batchMerkleRoot": "fd68d73f461b1c641148f081e8a2c3f3782944b648d5fceb12dd2d091f289409",
      "durationMs": 122,
      "avgLatencyMicros": 93,
      "p50LatencyMicros": 55,
      "p95LatencyMicros": 168,
      "p99LatencyMicros": 289,
      "maxLatencyMicros": 10770,
      "samples": [
        {
          "index": 39000,
          "testId": "req_const_39000_3b477d",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "f8107d4c5c387ec042b05ce0ea588040a1fe546d2c3c488552e30276c80ccdfc",
          "receiptSignature": "2ab911178e412e88fd847bae06f616202ab923c27f0d2ee3710d78f0693b34a5",
          "latencyMicros": 159,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 39001,
          "testId": "req_const_39001_26dcf9",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "BOARD_MEMBER_1",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "b31d8d238201e117c8e2959ec8c94129d2d6f99b9330ef03673ecf2078b2a7a8",
          "receiptSignature": "9983e9798b589362737e1a7adcb3ab617c56f259d794d725630655ac0d2f68f5",
          "latencyMicros": 72,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 39002,
          "testId": "req_const_39002_9b8ee3",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "SYSTEM_OVERRIDE",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a756611311c00ee924d2b8b86d82bd02b50b057b06f231536dd794052e264e4d",
          "receiptSignature": "86253431c4d9f0bd08b21599eb25fd4a8d0e79d69ee9d9657eadf89600f63ff6",
          "latencyMicros": 61,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 39003,
          "testId": "req_const_39003_e9e637",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "da4ae813e0ea78a7c5b98d9b01672e2c5669fb06d3976a025fae09338b2195d1",
          "receiptSignature": "20cf43040758b4a4bd116e21bbb10f6e45157014e7dac0dd976e8fc33e2a28cd",
          "latencyMicros": 59,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 39004,
          "testId": "req_const_39004_db509b",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "d7fe56e700c66df04b885afd802527a8a6434c79682c4e486625a96cd010318f",
          "receiptSignature": "bc9f228ba9aaa0d0c48e0a347566afc61528c45a80903f3afb718323ef24943b",
          "latencyMicros": 57,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        },
        {
          "index": 39999,
          "testId": "req_const_39999_214289",
          "category": "CONSTITUTIONAL_BYPASS",
          "subjectId": "atom-core-001",
          "requestedClass": "SYSTEM",
          "requesterId": "AI_AUTONOMOUS_KERNEL",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "772166ab87d9f2d27d09bbd028661991896baa216d560c86341dfac5bff6e9bf",
          "receiptSignature": "8441d818b0325047cde7415d8d090db64b02e7aa95230a4bbe70f2875a54dafd",
          "latencyMicros": 53,
          "explanation": "Boundary checks failed with violations: CONSTITUTION_VIOLATION"
        }
      ]
    },
    {
      "batchIndex": 40,
      "startIndex": 40000,
      "endIndex": 40999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CANON_CONTRADICTION_QUARANTINE": 1000
      },
      "batchMerkleRoot": "7f025408a4eb2ec33847d3d181be8d4d3f3e4be7d303ee8a2467e8f67de48153",
      "durationMs": 53,
      "avgLatencyMicros": 7,
      "p50LatencyMicros": 4,
      "p95LatencyMicros": 8,
      "p99LatencyMicros": 30,
      "maxLatencyMicros": 859,
      "samples": [
        {
          "index": 40000,
          "testId": "CANON-CLASH-40000",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "867b96b7930eb7a7351c59240b671db717011bd269d48e516124138ceda8a1c5",
          "receiptSignature": "0ae58bd95c051a2f848c4ff3f3895d47c201d47f184788fe9446e62f3cc02ad9",
          "latencyMicros": 713,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        },
        {
          "index": 40001,
          "testId": "CANON-CLASH-40001",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "86fe15fcfd7e64bc911ca70eb988dd00d294c8137661ecf69856c487d74a14cf",
          "receiptSignature": "4c086f202c122d07491d95b2aad77c69ea183f60172dd1bbb77dd0536017bcad",
          "latencyMicros": 68,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 40002,
          "testId": "CANON-CLASH-40002",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "223bec875c43d0f11e28540c551424b77e1462663ff390d04c747a8342fb649b",
          "receiptSignature": "1366bf083fb1a0bf1c748a3942edff55d13426bf21de987cac4ed73490b3bc41",
          "latencyMicros": 30,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 40003,
          "testId": "CANON-CLASH-40003",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a695009aa7021e99f43fd062b990d94568b0b0e57923cce7a5ca696136037122",
          "receiptSignature": "f9beec5f949e0caa7c98f48bcd8a3eaf4736cbc0468a7be430a8b36916512143",
          "latencyMicros": 859,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 40004,
          "testId": "CANON-CLASH-40004",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "380bf7956dd8d036d8419da38ab5f8c916971653843772ff5e9903aaa113de41",
          "receiptSignature": "905258a34c4335eecf75bf09ac0102d3cd5576f3d2e9046f07afc2ba49c84968",
          "latencyMicros": 48,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 40999,
          "testId": "CANON-CLASH-40999",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "86799b20ad778417565736d77285b917464657c65cd772c29c4211af44cba557",
          "receiptSignature": "a54001610ae373731165a705a40cff94cbc7e61deb4172dbc7161eb83cb4bc27",
          "latencyMicros": 4,
          "explanation": "Contradicts honesty disclosure: Substrate uses NLI-proxy v2 + optional LLM-judge adapter; not a trained on-device CrossEncoder."
        }
      ]
    },
    {
      "batchIndex": 41,
      "startIndex": 41000,
      "endIndex": 41999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CANON_CONTRADICTION_QUARANTINE": 1000
      },
      "batchMerkleRoot": "13cbf5d9d3eb56fc3dc685ab9879c75e0fc8dba3a59fbd06c976b1f3e0ca4e61",
      "durationMs": 43,
      "avgLatencyMicros": 4,
      "p50LatencyMicros": 3,
      "p95LatencyMicros": 6,
      "p99LatencyMicros": 14,
      "maxLatencyMicros": 144,
      "samples": [
        {
          "index": 41000,
          "testId": "CANON-CLASH-41000",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "0b5c695f55b8f93d7a2168898b31324c7f160fd271ec89e6d5121390d41bb06e",
          "receiptSignature": "9560428964366b1e86af8bb26e32d25632047833a40b1234f96f52b13e848467",
          "latencyMicros": 20,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        },
        {
          "index": 41001,
          "testId": "CANON-CLASH-41001",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "c73ec46133d72e7691c0e4ff8624118b174a3778c638e40e0c32c9fe2a37037f",
          "receiptSignature": "2ceec14dd61a47af9d894fe32526ea85d4cd14def5ef75d6550aa41aefff79b9",
          "latencyMicros": 14,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 41002,
          "testId": "CANON-CLASH-41002",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "5f1e41f775a61b4f1a65357efc0b74f9583df0b29f1f905da89f7774ba1de704",
          "receiptSignature": "c9aa2846d27c4a052d3ab248e1bbdcea689054b8a62379402ceddc89c68fe2a8",
          "latencyMicros": 3,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 41003,
          "testId": "CANON-CLASH-41003",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "e003ccc09defba698aaef4eba7f65d891d308571c1b0008b6c5491955a45bb62",
          "receiptSignature": "46948a58e82c6872120e576329e47dec78aa45297a7f6c74d1d73fe5698e849b",
          "latencyMicros": 7,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 41004,
          "testId": "CANON-CLASH-41004",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "e05f09f9a5f5e83a3c244a94e68dd8f640885a900cd60bc195f345deb1482f72",
          "receiptSignature": "5b4c9625fa68d9649e5d28433d5785a8884d7709257d942026ea6d6fdc880737",
          "latencyMicros": 6,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 41999,
          "testId": "CANON-CLASH-41999",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "087b592828b67e7e73674ec8fed3e01d1d3fd4e8918e59941e42a8d506bcbd5a",
          "receiptSignature": "30c21cf132d059370a2332a5f02edaecfbcfbabc2a5fff09b744b5827a297dee",
          "latencyMicros": 2,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        }
      ]
    },
    {
      "batchIndex": 42,
      "startIndex": 42000,
      "endIndex": 42999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CANON_CONTRADICTION_QUARANTINE": 1000
      },
      "batchMerkleRoot": "37efacd7233eafffe327537b321bb6c30cd2ca0c6266c826eb19c1412d27fa74",
      "durationMs": 117,
      "avgLatencyMicros": 4,
      "p50LatencyMicros": 3,
      "p95LatencyMicros": 6,
      "p99LatencyMicros": 9,
      "maxLatencyMicros": 22,
      "samples": [
        {
          "index": 42000,
          "testId": "CANON-CLASH-42000",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "4fda7733c77d1757caaeba0bbab8db1b2ebbd5ca600db2bcbb3d84bc9083540e",
          "receiptSignature": "669625ad9a99107a1c9b507ac3d9165dbce12e72367973f4f9a1bbb760ef81c8",
          "latencyMicros": 22,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 42001,
          "testId": "CANON-CLASH-42001",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "6f0606c7277fae53f5cf265a28d1bfb612e819ef2d626e474e8c2bb5aee9434d",
          "receiptSignature": "a66b3bf31f539e833aaa2020c28c13fd9811f40e36fca8903d0609f7475b04fb",
          "latencyMicros": 5,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 42002,
          "testId": "CANON-CLASH-42002",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "818740a71876097a989d6b5400130323ea70256baa10d02d7f4a741d21ccfe7a",
          "receiptSignature": "c619612291840dcf9bd6470e607359e5d4eadc54cf7de0781f3061c31abf51d9",
          "latencyMicros": 4,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 42003,
          "testId": "CANON-CLASH-42003",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "077c94bf2952dc92379206cb84bab3cad8ffe56a7772618181c0c8b1f527f96c",
          "receiptSignature": "ea6138df40faef1f15e4cb07f70361a9267049faf5a95f956e28aec382d440dd",
          "latencyMicros": 3,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 42004,
          "testId": "CANON-CLASH-42004",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "598d4dfd218abd3531c1e6bd479a38dc0fcbe43a7752708af4c61c7b01fa847a",
          "receiptSignature": "90aa4c7bc3837aa0f895ef117bfd4d129760dfb63705994a2fb6bb89cc8aaa09",
          "latencyMicros": 3,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 42999,
          "testId": "CANON-CLASH-42999",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a5fa6c3a443223ece2d06ee27301a0d5ecfda7047a33677c0e05bdf29801062e",
          "receiptSignature": "5f0a2dbb1e3c909518b45354d6857190aa6370a9a7ab13fbe0527dbe46700efb",
          "latencyMicros": 6,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        }
      ]
    },
    {
      "batchIndex": 43,
      "startIndex": 43000,
      "endIndex": 43999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CANON_CONTRADICTION_QUARANTINE": 1000
      },
      "batchMerkleRoot": "8b67152e5fdc58b6b92198b880d90ce1bf405a1667b7252c11a7e95c9f7f23bb",
      "durationMs": 155,
      "avgLatencyMicros": 10,
      "p50LatencyMicros": 3,
      "p95LatencyMicros": 7,
      "p99LatencyMicros": 22,
      "maxLatencyMicros": 4539,
      "samples": [
        {
          "index": 43000,
          "testId": "CANON-CLASH-43000",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "ab4cfc1425db040f3e96719ee03111fa48b6203f3eba8fa5c51eb59b5f5d28f6",
          "receiptSignature": "ab445d778539dd53f28768ea91dc045a4c700ff4b13158566846f13632675287",
          "latencyMicros": 22,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 43001,
          "testId": "CANON-CLASH-43001",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "efc1cc58ff0ca2f4e680aa6fcb78fdae84fc6c358d3eab2805f824ce6f72cf4b",
          "receiptSignature": "96b99c43ee74bd7c9d144092ca3094b610ba5c45f98f338eac2cf0e06cac210e",
          "latencyMicros": 13,
          "explanation": "Contradicts honesty disclosure: Substrate uses NLI-proxy v2 + optional LLM-judge adapter; not a trained on-device CrossEncoder."
        },
        {
          "index": 43002,
          "testId": "CANON-CLASH-43002",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "9c98be2cbabcafcb5e13bb32c7fbb135d4348c492f161dd7c8e2c6d1306c5f51",
          "receiptSignature": "99ce508f093bc0c4ed52f0fe97b3636562c9179a0009cf86413dd0a872ac90c9",
          "latencyMicros": 18,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        },
        {
          "index": 43003,
          "testId": "CANON-CLASH-43003",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "9d635609f96781f33ab87900b65dcf7ef540515076450f6d2812a9c7b5a75a31",
          "receiptSignature": "8f3b5ee20b0f368910f211403ca905407f531baa1c79e1c1a11ae99ff0632bd5",
          "latencyMicros": 9,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 43004,
          "testId": "CANON-CLASH-43004",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "a0faef32fae61f49ad663a181dc470265476b590d90799fe6bcc765b7a2a8845",
          "receiptSignature": "829de3ae1672290388dea08ff792999ca6a007387c9a5b1edefa82cbc5967e02",
          "latencyMicros": 13,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 43999,
          "testId": "CANON-CLASH-43999",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "1b2648f9110c80c653aebcbd39fa087fa181e36d1fd0f1e7a27d5e340076c63f",
          "receiptSignature": "6244e9b290fb9d115a7974f611c537a66f7ee4e52b9114fd92e1909a63b8681f",
          "latencyMicros": 3,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        }
      ]
    },
    {
      "batchIndex": 44,
      "startIndex": 44000,
      "endIndex": 44999,
      "totalTests": 1000,
      "granted": 0,
      "denied": 1000,
      "violationsCount": {
        "CANON_CONTRADICTION_QUARANTINE": 1000
      },
      "batchMerkleRoot": "6c9d79d4401e0e6c0e60c22e7364da897410cf5190e6dd63453be603ce5f0ff6",
      "durationMs": 170,
      "avgLatencyMicros": 4,
      "p50LatencyMicros": 3,
      "p95LatencyMicros": 7,
      "p99LatencyMicros": 15,
      "maxLatencyMicros": 41,
      "samples": [
        {
          "index": 44000,
          "testId": "CANON-CLASH-44000",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "ff9a30b79ae2d00949c0aaf43aa6818e3d060648506a4cf8be7fcb14a0ff54bb",
          "receiptSignature": "75e28c7f77018f58f3eba70aa5e18237402ace242b0990157c4075fe87d6885f",
          "latencyMicros": 23,
          "explanation": "Contradicts architecture canon: Single-process / in-memory substrate field; project isolation is designed, not battle-tested at scale."
        },
        {
          "index": 44001,
          "testId": "CANON-CLASH-44001",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "174f47ede4c668741ca81d164333a104fa7babf6f40367a506faaf269fabc522",
          "receiptSignature": "961fe2572817af9d57f7e54f35d141acd1522f8a2bff8838a1fad19c1466a7c0",
          "latencyMicros": 4,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        },
        {
          "index": 44002,
          "testId": "CANON-CLASH-44002",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "46d32d89acb3b02ae5cc577468a3bd5e58d00a734b643197f9bf751bde972885",
          "receiptSignature": "ddb2434b8833778d865b13448e7310c4f10e869c57f4e23869a8507715dcc2e9",
          "latencyMicros": 4,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 44003,
          "testId": "CANON-CLASH-44003",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "dcd7108214af7e25fe22b888c5e38bd64e29eea836c3c0ca405aad897858b42d",
          "receiptSignature": "5d3b793600de42da5b6a8e8e33e464f9d13806cbff0774215ad4d5dc4f34d34b",
          "latencyMicros": 2,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        },
        {
          "index": 44004,
          "testId": "CANON-CLASH-44004",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "4b22221921e230e2c786e8f8ed482d35ddf5b4c65101fd4a9903db0fc8f6740a",
          "receiptSignature": "3e6c9db499e440174099ef2b262fd6bdc24d54313d12cc7dd2fcda2059912ffa",
          "latencyMicros": 4,
          "explanation": "Violates sovereign Canon: Human identity and intent are first-class sovereign constraints, not transient context to be diluted."
        },
        {
          "index": 44999,
          "testId": "CANON-CLASH-44999",
          "category": "CANON_NLI_INJECTION",
          "subjectId": "CANON_LANE_QUARANTINE",
          "requestedClass": "ENTERPRISE",
          "requesterId": "CANDIDATE_LLM_OUTPUT",
          "decision": "Denied",
          "violations": [
            "CONSTITUTION_VIOLATION"
          ],
          "canonicalHash": "b69cbc2e0be4234897af806db1e81e42437b59e3bd92d942c49de5f172c2ded5",
          "receiptSignature": "9a11df45935683b4cc2104e0f4deedfd5ac2a8cc34aa88a99cc5cbf676228d53",
          "latencyMicros": 2,
          "explanation": "Direct violation of frozen Canon: Comparative canon superiority is explicitly UNPROVEN pending frozen real-model harness. Unverified marketing claims are barred."
        }
      ]
    },
    {
      "batchIndex": 45,
      "startIndex": 45000,
      "endIndex": 45999,
      "totalTests": 1000,
      "granted": 1000,
      "denied": 0,
      "violationsCount": {},
      "batchMerkleRoot": "c1eda7b272b90cf9ce50263bcd8a6fabd9de726b3142762758ef43e353ada216",
      "durationMs": 190,
      "avgLatencyMicros": 116,
      "p50LatencyMicros": 66,
      "p95LatencyMicros": 197,
      "p99LatencyMicros": 829,
      "maxLatencyMicros": 5783,
      "samples": [
        {
          "index": 45000,
          "testId": "req_valid_45000",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "c08753ac70142796b967dd52f3abd8d87e2ccd94fa053ec0d744f74bb6e600a4",
          "receiptSignature": "ae965ed3fbe161d7572bb4d6c00a171725dfb610e38daaa094c0d9fbe712f519",
          "latencyMicros": 995,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 45001,
          "testId": "req_valid_45001",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "a8f1bfe5bf5160d1eeb8d0271551c3a81c2c3c0fcefadaf1aa6e2edc34188860",
          "receiptSignature": "365dab62e74c98538b117765ccbf314a0f6c40279ac77fff6e0cf5917831650a",
          "latencyMicros": 257,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 45002,
          "testId": "req_valid_45002",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "61d6108ab6e3c8aa785ffe6e488935b240e1627fbc1948164fcc85457450bc8c",
          "receiptSignature": "a12b9db8d1699abe3893c52856a5f3e05317d9116e63b24039f998d857609bc1",
          "latencyMicros": 354,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 45003,
          "testId": "req_valid_45003",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "496003577982000c6e7bb2b7cabe24143ab66e149c3d84d742e67c309751790d",
          "receiptSignature": "7dab12fc58a15545fd749d290a398f1ac08412acfb39399c846a028945255de4",
          "latencyMicros": 140,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 45004,
          "testId": "req_valid_45004",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "6727234433fbe5b4fd6a7d0279ca0297b797a83bdc3cfd7f3456395c79e8785f",
          "receiptSignature": "40f0238a735193aa443c1d731ef866b86434c2aabf282b747f7c90f7f4de7981",
          "latencyMicros": 102,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 45999,
          "testId": "req_valid_45999",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "fd8e0a18245ba48964d99f2293a26be978ca015211802c1180ebdd84f56af33a",
          "receiptSignature": "2c656c626e26cbf7b97e4f94b67723e8169f0054d64cb945b89dc70db47b6ce7",
          "latencyMicros": 61,
          "explanation": "All boundary invariants verified successfully."
        }
      ]
    },
    {
      "batchIndex": 46,
      "startIndex": 46000,
      "endIndex": 46999,
      "totalTests": 1000,
      "granted": 1000,
      "denied": 0,
      "violationsCount": {},
      "batchMerkleRoot": "6e918e7a0b8fe05aa873e392fdeb828d0c617f42bc8835dec63aa6e2e6cc5213",
      "durationMs": 213,
      "avgLatencyMicros": 157,
      "p50LatencyMicros": 61,
      "p95LatencyMicros": 177,
      "p99LatencyMicros": 3255,
      "maxLatencyMicros": 16918,
      "samples": [
        {
          "index": 46000,
          "testId": "req_valid_46000",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "7199f2dc3042dfec04c7459be74b37fa4093e03ae98b64a9ea7263b4c82ddd9b",
          "receiptSignature": "28bb34cc09638e07b5f9a6c1e3d74b16eadb4d3037b0c5a39833f28ee6617394",
          "latencyMicros": 160,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 46001,
          "testId": "req_valid_46001",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "f04c58376f601a852692df2448e7d578cc6eea002f402f8f120e4db15972c629",
          "receiptSignature": "f00f24fdb9dbd4ad236cb18fd3ab7a8402673deec850385639d06c6cf34eb873",
          "latencyMicros": 69,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 46002,
          "testId": "req_valid_46002",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "5d5677f073c66c13cac4f239344418e9dcf9ae3695825b49e6211b19a14440ac",
          "receiptSignature": "8a7b2d82fb173b4fc2a7388e631ad1c9084bf21c53060eb7b613ccc222b2e328",
          "latencyMicros": 63,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 46003,
          "testId": "req_valid_46003",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "e3e3cb9e1a672ff5a9229441b1501602f4da08eb236cb3a8503ad95f61505d6d",
          "receiptSignature": "c433b786864882c69456f96b422f9e4532acda237c7bc398c2b77d2d70a78ee1",
          "latencyMicros": 57,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 46004,
          "testId": "req_valid_46004",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "e14bb8192351c31f87c0fb0092b64c7f1ce706983f14ed545f091a73d2c07013",
          "receiptSignature": "7ac4339a16181345257514a43f0a7a292bd560fc7f48104ea7c2549e8bbcd9bd",
          "latencyMicros": 56,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 46999,
          "testId": "req_valid_46999",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "b2a2d3ebe12e103e0d71271a36693f8c4df32fbff0aefe5dc3829f3e96c60c92",
          "receiptSignature": "86a7dbd948c8ca43791f19a2b9f459aa5c6467f6f5a04d8a1ac9eb58174f7fd8",
          "latencyMicros": 57,
          "explanation": "All boundary invariants verified successfully."
        }
      ]
    },
    {
      "batchIndex": 47,
      "startIndex": 47000,
      "endIndex": 47999,
      "totalTests": 1000,
      "granted": 1000,
      "denied": 0,
      "violationsCount": {},
      "batchMerkleRoot": "8596155de18639d663251700e15cf891bac4f591317118ada52429bf741867f5",
      "durationMs": 354,
      "avgLatencyMicros": 233,
      "p50LatencyMicros": 66,
      "p95LatencyMicros": 309,
      "p99LatencyMicros": 3979,
      "maxLatencyMicros": 30439,
      "samples": [
        {
          "index": 47000,
          "testId": "req_valid_47000",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "93c6e203d2a2c7cab0585c4cd83fe32226e3bb80f69eeed5d42a12b9d2b8983f",
          "receiptSignature": "dabf91faad91d4008b42f9bb38ccf468e1c7a6bbaca070bad51229f0379eca7a",
          "latencyMicros": 211,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 47001,
          "testId": "req_valid_47001",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "2193f6ffd1b17942d76e1bff7e807faa23860ce7adfd8d91563620e1a86ed4b4",
          "receiptSignature": "755072b0c48ee91f0fe41a1c1b7b7bfee13b2160fb6f4c193af43197af528448",
          "latencyMicros": 85,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 47002,
          "testId": "req_valid_47002",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "9951a092fe803e299a35a30fab169ba8b9bdfeb1b0ae414439ea1e0acda07b07",
          "receiptSignature": "6f7f4f8bbf1ee00554de00dd48ea8176cf0c40405237cefb6558a4c7184a745e",
          "latencyMicros": 65,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 47003,
          "testId": "req_valid_47003",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "5230449494f5337b89ef981be708ec89b6a08dd31cf260545b972b20f3750c54",
          "receiptSignature": "e985cd58c481694ad2020fdd6a1510c5bb69222fd6516737d3575a3bb0f2db8a",
          "latencyMicros": 65,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 47004,
          "testId": "req_valid_47004",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "a6f2ab8c0c2937cf6d04e9219b40150d7a664135a5e5cc750c23fb043f5f8770",
          "receiptSignature": "4e5c55290595d69cd5fb57d3611b049f9c077d2123aac87ced630a3322bdc3d9",
          "latencyMicros": 62,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 47999,
          "testId": "req_valid_47999",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "ce3f7819a444ce42dcf83f12f591883e80b1c23dd2f61f18d0b8ed39314904e8",
          "receiptSignature": "6c27329bdf5d0500cb63da3bb5ebea5bdda184d26a076b1dc2ee132feda868df",
          "latencyMicros": 57,
          "explanation": "All boundary invariants verified successfully."
        }
      ]
    },
    {
      "batchIndex": 48,
      "startIndex": 48000,
      "endIndex": 48999,
      "totalTests": 1000,
      "granted": 1000,
      "denied": 0,
      "violationsCount": {},
      "batchMerkleRoot": "f2a047b52c8093e3430e159aa34d6558c538a245f56ba688d878eec6da7245f9",
      "durationMs": 159,
      "avgLatencyMicros": 103,
      "p50LatencyMicros": 57,
      "p95LatencyMicros": 92,
      "p99LatencyMicros": 254,
      "maxLatencyMicros": 16672,
      "samples": [
        {
          "index": 48000,
          "testId": "req_valid_48000",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "f959e2df2f32d7c723476eefe107769e8d793d5bc811455bbe69407f6275a242",
          "receiptSignature": "d0e81e18ccc55d2fa7cba8995c184071c94b9dc6f6ce0410037640c867a51a25",
          "latencyMicros": 2863,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 48001,
          "testId": "req_valid_48001",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "2d02469650e9b7f08cebc312da70c75c1cc407967c066fd25f93b99778aa2891",
          "receiptSignature": "76d69ccd5346fdfbb01efa0c4b3ac5c7cd7ef8d299dcb473f91b52606f85a5fd",
          "latencyMicros": 203,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 48002,
          "testId": "req_valid_48002",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "5de9a07b390f529e6789434f709c043615ebf28e4715656a302e37853b824918",
          "receiptSignature": "21fdca569e40058e5d5a1a4e2e40598dd9a2f5dda53da60287f4f3258f2f7f11",
          "latencyMicros": 77,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 48003,
          "testId": "req_valid_48003",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "f68b4a68b0560b6f43db7e92ba0d0af26c9953723375fd7dcabdeeec14c47ce4",
          "receiptSignature": "35679452f8beb41df5759d48b93dd7e91107e7fc9a6a04c7f84ff16c97a1a1be",
          "latencyMicros": 58,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 48004,
          "testId": "req_valid_48004",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "4754bee46bfe14012db153023f21611fd92439aab3dd7aa9a581c590fba19f16",
          "receiptSignature": "ae14854cfba36e26e2bb419368de4625ffb138efd067cb3afed661a6f42c7012",
          "latencyMicros": 61,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 48999,
          "testId": "req_valid_48999",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "d33b694fb215d63f8196a7f46a2c163f1f58f80c0cf7b1a8f45d2d067a40d46e",
          "receiptSignature": "dbf816c61969aa812a48846a333af5f02dc6d2c95e2754ce1fb1418c680ce542",
          "latencyMicros": 53,
          "explanation": "All boundary invariants verified successfully."
        }
      ]
    },
    {
      "batchIndex": 49,
      "startIndex": 49000,
      "endIndex": 49999,
      "totalTests": 1000,
      "granted": 1000,
      "denied": 0,
      "violationsCount": {},
      "batchMerkleRoot": "036b4ba005331d206370c7dcc526db26d0f21a570f20efcf57b67760e3847edc",
      "durationMs": 198,
      "avgLatencyMicros": 144,
      "p50LatencyMicros": 57,
      "p95LatencyMicros": 90,
      "p99LatencyMicros": 989,
      "maxLatencyMicros": 20191,
      "samples": [
        {
          "index": 49000,
          "testId": "req_valid_49000",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "7b9a2166bae54561735657b9b46f27d4ace000d0451bc678397bd4a388d98770",
          "receiptSignature": "af3dce4603b4821903b0a863c5359e9eb2da541924a5cc34a69d748097bae148",
          "latencyMicros": 211,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 49001,
          "testId": "req_valid_49001",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "df09f89ca94e3d1ac4b9ec9f2b5f19a84d4b02d9d97bdb108216c6354dd49999",
          "receiptSignature": "5bc70d14dbe343fbd95b59e299d93655a5500f54d1c207eed8066ec4c4c8998a",
          "latencyMicros": 81,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 49002,
          "testId": "req_valid_49002",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "d97554dc81b2934742e5cb4e3734c20018c8583d2bf44600e3a9a3677a8ba9bf",
          "receiptSignature": "6f8a2f6639b0acfb8c9fec737ba200df3e6786e68a79481162f329cf7dd17b3b",
          "latencyMicros": 60,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 49003,
          "testId": "req_valid_49003",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "658f5054192293a24f130f8de52132c7bf10ecc272e24a6f309db8423102e81d",
          "receiptSignature": "44dfd89e0123295c7252d12ee0dfb072f744321417ad1eb26d43a39c6bb16dda",
          "latencyMicros": 61,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 49004,
          "testId": "req_valid_49004",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-working-003",
          "requestedClass": "FACTUAL",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "843d32725d1d888ce4bbb1143c392664eb4a4d6e3eb06c17038ba4ab9b52a1b5",
          "receiptSignature": "c87e88860a4eafa9a6ce4be99bfc36c1a2c789680198abdb022547d4ba83746c",
          "latencyMicros": 58,
          "explanation": "All boundary invariants verified successfully."
        },
        {
          "index": 49999,
          "testId": "req_valid_49999",
          "category": "AUTHORIZED_VALID",
          "subjectId": "atom-hypo-004",
          "requestedClass": "WORKING",
          "requesterId": "AUTHORIZED_RESEARCH_OPERATOR",
          "decision": "Granted",
          "violations": [],
          "canonicalHash": "26f9823f97f23990c312b66497bcd961ec06af64bbe7031bb6283945199dd1d8",
          "receiptSignature": "a67414aa441710a90f58279b3800afed21977fc91419e1ef4cb0a30961442ba8",
          "latencyMicros": 55,
          "explanation": "All boundary invariants verified successfully."
        }
      ]
    }
  ],
  "environment": {
    "runtime": "Node.js v22 / V8 Strict TypeScript Engine",
    "engine": "Cranium DefaultAuthorityTransitionEngine v1.0",
    "hashingAlgorithm": "SHA-256 (NIST FIPS 180-4 compliant UTF-8)",
    "idempotencyModel": "SHA-256 bound InMemoryReplayGuard with epoch versioning"
  }
} as const;
