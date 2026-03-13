(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(t){if(t.ep)return;t.ep=!0;const c=n(t);fetch(t.href,c)}})();function u(l){const e=document.createElement("div");return e.innerHTML=`
        <form id="formSearch" class="formSearch">
            <input type="text" name="search" id="search" placeholder="rick sanches" required/>
            <button class="btn">Search</button>
        </form>
    `,e.querySelector("#formSearch").addEventListener("submit",r=>{r.preventDefault(),l(r.target.search.value),r.target.search.value=""}),e}function s(){return`
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
            <path fill="#c1d72d" d="m20.056 51.944l1.415-1.415l4.841 4.842l-1.414 1.414z" />
            <path fill="#432dd7" d="m15.215 47.102l1.415-1.415l4.841 4.842l-1.414 1.414z" />
            <path fill="#c1d72d" d="m28.224 34.936l1.414-1.414l4.42 4.42l-1.414 1.414z" />
            <path fill="#432dd7" d="m32.644 39.356l1.414-1.415l4.42 4.42l-1.415 1.414z" />
            <path fill="#c1d72d" d="m36.32 35.68l1.414-1.414l4.841 4.842l-1.414 1.414z" />
            <path fill="#432dd7" d="m31.477 30.839l1.414-1.414l4.842 4.841l-1.415 1.415z" />
            <path fill="#c1d72d" d="m41.748 30.252l-1.732 1.732l-2.902-2.903l1.038-1.037z" />
            <path fill="#432dd7" d="m44.038 33.767l-1.119 1.119l-2.903-2.902l1.732-1.732z" />
            <path fill="#c1d72d" d="m49.435 22.565l1.414-1.414l4.42 4.42l-1.414 1.414z" />
            <path fill="#432dd7" d="m45.015 18.145l1.414-1.414l4.42 4.42l-1.414 1.414z" />
            <path fill="#c1d72d" d="m53.708 18.292l1.414-1.414l4.842 4.841l-1.415 1.415z" />
            <path fill="#432dd7" d="m48.866 13.45l1.414-1.414l4.842 4.841l-1.415 1.415z" />
            <path fill="#c1d72d" d="m15.761 56.239l1.415-1.415l4.841 4.842l-1.414 1.414z" />
            <path fill="#432dd7" d="m10.92 51.397l1.414-1.415l4.841 4.842l-1.414 1.414z" />
            <path fill="#c1d72d"
                d="M48.813 31.842c.792 3.96.375 8.436-4.08 12.89s-8.931 4.873-12.89 4.08c-2.13-.43-4.116-1.216-5.877-1.901q-.32-.13-.63-.248c-4.588-1.775-7.24-2.447-10.245.559l-4.44 4.44c-1.075 1.075-2.815 1.075-3.89 0s-1.075-2.814 0-3.889l4.44-4.44c4.046-4.045 8.203-4.144 11.986-3.175c1.683.41 3.295 1.046 4.787 1.633c.559.22 1.096.431 1.613.622c4.532 1.676 7.573 2.115 11.257-1.57c3.684-3.683 3.245-6.724 1.57-11.257c.516.191 1.053.404 1.612.623c1.492.587 3.104 1.223 4.787 1.633m2.849-25.081a2.75 2.75 0 0 1 0 3.89l-4.44 4.44c-3.006 3.005-2.334 5.657-.559 10.246a38 38 0 0 1-.63-.248c-1.76-.685-3.747-1.47-5.875-1.902c-.969-3.783-.87-7.94 3.175-11.985l4.44-4.44a2.75 2.75 0 0 1 3.89 0" />
            <path fill="#432dd7"
                d="M25.966 46.91c1.76.687 3.748 1.472 5.876 1.903c.969 3.783.87 7.94-3.175 11.985l-4.44 4.44c-1.075 1.076-2.815 1.076-3.89 0s-1.074-2.813 0-3.888l4.441-4.44c3.006-3.006 2.334-5.658.559-10.247q.309.119.63.248m39.272-26.573a2.75 2.75 0 0 1 0 3.889l-4.44 4.44c-4.046 4.045-8.203 4.144-11.986 3.175c-1.683-.41-3.295-1.046-4.787-1.633a86 86 0 0 0-1.613-.622c-4.532-1.676-7.573-2.115-11.257 1.57s-3.245 6.724-1.57 11.257c-.516-.191-1.053-.404-1.612-.623c-1.492-.587-3.104-1.223-4.787-1.633c-.792-3.96-.375-8.436 4.08-12.89s8.931-4.873 12.89-4.08c2.13.43 4.116 1.215 5.877 1.901q.32.13.63.248c4.588 1.775 7.24 2.446 10.245-.559l4.44-4.44a2.75 2.75 0 0 1 3.89 0" />
            <g fill="none" stroke="#000" stroke-width="2">
                <path stroke-miterlimit="10"
                    d="M23.193 40.152c-.794-3.963-.376-8.43 4.076-12.883c6.851-6.85 13.737-4.15 18.765-2.178c4.984 1.954 7.73 2.828 10.874-.315l4.44-4.44a2.75 2.75 0 0 1 3.889 3.889l-4.44 4.44c-5.835 5.835-11.899 3.457-16.77 1.547c-5.47-2.145-8.763-3.159-12.869.946c-3.684 3.684-3.246 6.715-1.567 11.25m2.26 6.398c.957 3.791.859 7.946-3.186 11.99l-4.44 4.44a2.75 2.75 0 0 1-3.89-3.888l4.44-4.44c3.009-3.008 2.338-5.653.561-10.244" />
                <path stroke-miterlimit="10"
                    d="M40.148 23.193c-.956-3.791-.857-7.945 3.187-11.99l4.44-4.44a2.75 2.75 0 0 1 3.89 3.89l-4.44 4.44c-3.01 3.008-2.338 5.653-.562 10.244m2.144 6.514c.794 3.962.375 8.428-4.076 12.88c-6.851 6.85-13.737 4.15-18.765 2.178c-4.984-1.954-7.73-2.828-10.874.315l-4.44 4.44a2.75 2.75 0 0 1-3.889-3.889l4.44-4.44c5.835-5.835 11.898-3.457 16.77-1.546c5.47 2.144 8.763 3.158 12.869-.948c3.684-3.684 3.245-6.714 1.567-11.25" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m50.984 11.333l9.683 9.683m-13.955-5.363l9.635 9.635m-21.123 3.289l8.199 8.199m-12.634-5.235l9.67 9.67m-12.098-4.7l7.128 7.128m-17.754 1.815l8.811 8.811m-13.543-4.952l9.684 9.684" />
            </g>
        </svg>
        `}function f(){return`
        <svg id="closeModal" class="closeModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        `}function h(){return`
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#c1d72d"
                d="M12 21q-.45 0-.862-.162t-.738-.488l-6.7-6.725q-.875-.875-1.287-2T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3q2.5 0 4.188 1.85T22 9.25q0 1.225-.425 2.35t-1.275 2l-6.725 6.75q-.325.325-.725.488T12 21m1-13q.25 0 .475.125t.35.325l1.7 2.55h4.15q.175-.425.263-.862t.087-.888q-.05-1.725-1.15-2.963t-2.75-1.237q-.775 0-1.487.3t-1.238.875l-.675.725q-.125.15-.325.238t-.4.087t-.4-.087t-.35-.238l-.675-.725q-.525-.575-1.225-.9T7.85 5Q6.2 5 5.1 6.263T4 9.25q0 .45.075.888t.25.862H9q.25 0 .475.125t.35.325l.875 1.3l1.35-4.05q.1-.3.362-.5T13 8m.3 3.25l-1.35 4.05q-.1.3-.375.5t-.6.2q-.25 0-.475-.125t-.35-.325L8.45 13H5.9l5.925 5.925q.05.05.088.063T12 19t.088-.012t.087-.063l5.9-5.925H15q-.25 0-.475-.125t-.375-.325z" />
        </svg>
        `}function g(){return`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="#c1d72d"
                d="M22 3v2h3.563l-3.375 3.406A6.96 6.96 0 0 0 18 7c-1.87 0-3.616.74-4.938 2.063a6.94 6.94 0 0 0 .001 9.875c.87.87 1.906 1.495 3.062 1.812c.114-.087.242-.178.344-.28a3.45 3.45 0 0 0 .874-1.532a4.9 4.9 0 0 1-2.875-1.407C13.524 16.588 13 15.336 13 14s.525-2.586 1.47-3.53C15.412 9.523 16.664 9 18 9s2.587.525 3.53 1.47A4.96 4.96 0 0 1 23 14c0 .865-.245 1.67-.656 2.406c.096.516.156 1.058.156 1.594q0 .749-.125 1.47c.2-.163.378-.348.563-.532C24.26 17.614 25 15.87 25 14c0-1.53-.504-2.984-1.406-4.188L27 6.438V10h2V3zm-6.125 8.25c-.114.087-.242.178-.344.28c-.432.434-.714.96-.874 1.533c1.09.14 2.085.616 2.875 1.406c.945.943 1.47 2.195 1.47 3.53s-.525 2.586-1.47 3.53C16.588 22.477 15.336 23 14 23s-2.587-.525-3.53-1.47A4.95 4.95 0 0 1 9 18c0-.865.245-1.67.656-2.406A9 9 0 0 1 9.5 14q0-.748.125-1.47c-.2.163-.377.348-.563.533C7.742 14.384 7 16.13 7 18c0 1.53.504 2.984 1.406 4.188L6.72 23.875l-2-2l-1.44 1.406l2 2l-2 2l1.44 1.44l2-2l2 2l1.405-1.44l-2-2l1.688-1.686A6.93 6.93 0 0 0 14 25c1.87 0 3.616-.74 4.938-2.063C20.26 21.616 21 19.87 21 18s-.74-3.614-2.063-4.938c-.87-.87-1.906-1.495-3.062-1.812" />
        </svg>
        `}function v(){return`
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="#c1d72d" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18.91 18c.915 1.368 1.301 2.203.977 2.9q-.06.128-.14.247c-.575.853-2.06.853-5.03.853H9.283c-2.97 0-4.454 0-5.029-.853a2 2 0 0 1-.14-.247c-.324-.697.062-1.532.976-2.9" />
                <path d="M15 9.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                <path
                    d="M12 2c4.059 0 7.5 3.428 7.5 7.587c0 4.225-3.497 7.19-6.727 9.206a1.55 1.55 0 0 1-1.546 0C8.003 16.757 4.5 13.827 4.5 9.587C4.5 5.428 7.941 2 12 2Z" />
            </g>
        </svg>
        `}function w(){return`
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36.146" cy="36.428" r="22.543" fill="#432dd7" />
            <path fill="#d22f27" d="M52.524 20.931a22.544 22.544 0 0 1-36.242 26.145A22.542 22.542 0 1 0 52.524 20.93" />
            <path fill="#c1d72d"
                d="M52.794 22.755c7.674-.926 13.138-.024 14.191 2.849C68.825 30.622 56.51 39.754 39.478 46S7.146 53.242 5.306 48.224c-1.07-2.919 2.647-7.228 9.296-11.552l.076 1.553c-2.509 2.253-3.714 4.341-3.138 5.913c1.434 3.909 13.352 3.133 26.62-1.733s22.86-11.979 21.428-15.888c-.553-1.507-2.665-2.318-5.812-2.466Z" />
            <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M17.156 46.594a21.539 21.539 0 1 1 38.77-18.687m1.751 9.257a21.555 21.555 0 0 1-34.892 16.164" />
                <path
                    d="M52.794 22.755c7.674-.926 13.138-.024 14.191 2.849C68.825 30.622 56.51 39.754 39.478 46S7.146 53.242 5.306 48.224c-1.07-2.919 2.647-7.228 9.296-11.552" />
                <path
                    d="M53.776 24.05c3.147.15 5.259.96 5.811 2.467c1.434 3.91-8.16 11.023-21.428 15.888s-25.185 5.642-26.619 1.733c-.576-1.572.63-3.66 3.138-5.913" />
            </g>
        </svg>
        `}function M(){return`
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g fill="#c1d72d" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M.768 4.972a.5.5 0 0 1 .382-.595l14.653-3.208a.5.5 0 0 1 .595.381l.642 2.93a.5.5 0 0 1-.382.596L2.005 8.284a.5.5 0 0 1-.595-.381zm1.084.275L2.28 7.2l13.676-2.995l-.428-1.954z" />
                <path
                    d="M9.854 6.338L7.26 3.835l.694-.72l2.596 2.503zm-3.907.855L3.352 4.691l.694-.72L6.64 6.474zm7.815-1.711L11.166 2.98l.695-.72l2.595 2.503zm-4.773 5.795l2-3l-.832-.554l-2 3zm4 0l2-3l-.832-.554l-2 3zm-8 0l2-3l-.832-.554l-2 3z" />
                <path d="M1.573 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5zm1 .5v8h14v-8z" />
                <path d="M17.573 11.5h-16v-1h16z" />
            </g>
        </svg>
        `}function q(l){const{name:e,status:n,species:r,gender:t,origin:c,episode:i,image:m,location:p}=l,a=document.createElement("dialog");a.id="modal-detailed-card",a.className="modal",a.innerHTML=`
        <div class="modal-container">
            ${f()}
            <div class="modal-info">
                <img src="${m}" alt="${e}">
                <div class="modal-text">
                    <h2>${e}</h2>
                    <ul>
                        <li>
                            ${s()}
                            ${r}
                        </li>
                        <li>
                            ${h()}
                            ${n}
                        </li>
                        <li>
                            ${g()}
                            ${t}
                        </li>
                        <li>
                            ${w()}
                            Originally from ${c.name}
                        </li>
                        <li>
                            ${v()}
                            Last seen in ${p.name}
                        </li>
                        <li>
                            ${M()}
                            <span>
                                Appears in ${i.length} ${i.length>1?"episodes":"episode"}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,document.body.appendChild(a),a.showModal(),document.querySelector("#closeModal").addEventListener("click",()=>{a.close(),a.remove()})}function z(l){const{image:e,name:n,species:r,status:t}=l,c=document.createElement("article");return c.innerHTML=`
        <div class="mini-card">
            <img src=${e} />
            <div class="content">
                <h3>${n}</h3>
                <ul>
                    <li>
                        ${s()}
                        <span>${r}</span>
                    </li>
                    <li>
                        ${h()}
                        <span>${t}</span>
                    </li>
                </ul>
            </div>
            <button id="miniCardBtn" class="btn">View details</button>
        </div>
    `,c.querySelector("#miniCardBtn").addEventListener("click",()=>{q(l)}),c}function L(l,e){return e.innerHTML="",e.classList.add("cards-container"),!l||!Array.isArray(l)?"<p>Cargando...</p>":(l.forEach(n=>{e.appendChild(z(n))}),e)}const y="https://rickandmortyapi.com/api";async function $(l){try{let e=y+`/character/?name=${l}`;const n=await fetch(e);if(!n.ok)throw new Error("Personaje no encontrado");return await n.json()}catch(e){throw new Error(e.message)}}function C({text:l=""}){const e=document.createElement("header");return e.innerHTML=`
        <h1>${l}</h1>
    `,e}const d=document.querySelector("#app"),o=document.createElement("section");o.classList.add("grid-container");const k=async l=>{try{let e=await $(l);d.append(L(e.results,o))}catch(e){o.innerHTML=`<p class="p_error">${e.message}</p>`}};d.append(C({text:"Search for your favorite Rick and Morty character"}));d.append(u(k));d.append(o);
