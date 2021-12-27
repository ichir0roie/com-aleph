var _s = $RefreshSig$();
import { useCallback, useEffect, useState } from "../-/esm.sh/react@17.0.2.js";
export default function useCounter() {
    _s();
    const [count, setCount] = useState(0);
    const [isSyncing, setIsSyncing] = useState(true);
    const increase = useCallback(()=>{
        setCount((n)=>n + 1
        );
        fetch('/api/counter/increase').catch((e)=>console.error(e)
        );
    }, []);
    const decrease = useCallback(()=>{
        setCount((n)=>n - 1
        );
        fetch('/api/counter/decrease').catch((e)=>console.error(e)
        );
    }, []);
    useEffect(()=>{
        fetch('/api/counter').then((resp)=>resp.json().catch(()=>({
                })
            )
        ).then(({ count  })=>{
            if (typeof count === 'number' && !Number.isNaN(count)) {
                setCount(count);
            }
        }).catch((e)=>console.error(e)
        ).finally(()=>{
            setIsSyncing(false);
        });
    }, []);
    return [
        count,
        isSyncing,
        increase,
        decrease
    ];
};
_s(useCounter, "5oTdpBfFrN2HnN+b6mgYFl8KQis=");

//# sourceMappingURL=useCounter.js.map