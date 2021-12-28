import mdParse from "../lib/mdParse.js#/lib/mdParse.ts@45787f";
export default function MdLoad({ text  }) {
    console.log(text);
    fetch("/api/mdLoad").then((res)=>console
    );
    //todo ここで同期的処理でreturnする必要がある。
    return mdParse("**yet get markdown text**");
};
_c = MdLoad;
var _c;
$RefreshReg$(_c, "MdLoad");

//# sourceMappingURL=mdLoad.js.map