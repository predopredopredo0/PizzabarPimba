import { useEffect, useMemo, useState } from "react";
import {
  Bike,
  Clock,
  MapPin,
  Minus,
  Phone,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { bordas, flavors, menuItems, neighborhoods, type Flavor } from "@/data/menu";

type Size = "grande" | "broto";
type Tab = "pizzas" | "porcoes" | "bebidas" | "entrega";
type Kind = "todas" | "salgada" | "doce";

type Line = {
  key: string;
  title: string;
  detail: string;
  unit: number;
  qty: number;
};

const WA = "5511915809970";
const BORDA_PRICE = bordas[0]?.price ?? 15;

function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

function priceOf(flavor: Flavor, size: Size) {
  return size === "grande" ? flavor.grande : flavor.broto;
}

function loadCart(): Line[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("canto-pedido");
    const parsed = raw ? (JSON.parse(raw) as Line[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function MenuSite() {
  const [tab, setTab] = useState<Tab>("pizzas");
  const [size, setSize] = useState<Size>("grande");
  const [kind, setKind] = useState<Kind>("todas");
  const [query, setQuery] = useState("");
  const [sortPrice, setSortPrice] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [mode, setMode] = useState<"retirada" | "entrega">("entrega");
  const [area, setArea] = useState("");
  const [areaQuery, setAreaQuery] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(loadCart());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("canto-pedido", JSON.stringify(lines));
  }, [lines, ready]);

  const q = fold(query.trim());

  const visibleFlavors = useMemo(() => {
    const list = flavors.filter((flavor) => {
      if (priceOf(flavor, size) == null) return false;
      if (kind !== "todas" && flavor.kind !== kind) return false;
      if (!q) return true;
      return fold(`${flavor.name} ${flavor.desc}`).includes(q);
    });
    list.sort((a, b) => {
      if (sortPrice) return (priceOf(a, size) ?? 0) - (priceOf(b, size) ?? 0);
      return a.name.localeCompare(b.name, "pt-BR");
    });
    return list;
  }, [kind, q, size, sortPrice]);

  const visibleItems = useMemo(() => {
    const group = tab === "porcoes" ? "porcao" : "bebida";
    const list = menuItems.filter((item) => {
      if (item.group !== group) return false;
      if (!q) return true;
      return fold(item.name).includes(q);
    });
    list.sort((a, b) => {
      if (sortPrice) return (a.price ?? 0) - (b.price ?? 0);
      return a.name.localeCompare(b.name, "pt-BR");
    });
    return list;
  }, [q, sortPrice, tab]);

  const visibleAreas = useMemo(() => {
    const needle = fold(areaQuery.trim());
    return neighborhoods.filter((item) => !needle || fold(item.name).includes(needle));
  }, [areaQuery]);

  const selectedArea = neighborhoods.find((item) => item.name === area) ?? null;
  const subtotal = lines.reduce((sum, line) => sum + line.unit * line.qty, 0);
  const fee = mode === "entrega" && selectedArea ? selectedArea.fee : 0;
  const total = subtotal + fee;
  const count = lines.reduce((sum, line) => sum + line.qty, 0);

  function addLine(line: Omit<Line, "qty">) {
    setLines((current) => {
      const found = current.find((item) => item.key === line.key);
      if (!found) return [...current, { ...line, qty: 1 }];
      return current.map((item) => (item.key === line.key ? { ...item, qty: item.qty + 1 } : item));
    });
  }

  function setQty(key: string, qty: number) {
    setLines((current) =>
      qty <= 0 ? current.filter((item) => item.key !== key) : current.map((item) => (item.key === key ? { ...item, qty } : item)),
    );
  }

  function orderLink() {
    const body = [
      "Olá! Quero fazer um pedido no Canto da Pizza Bar.",
      "",
      ...lines.map((line) => `${line.qty}x ${line.title}${line.detail ? ` — ${line.detail}` : ""} (${brl(line.unit * line.qty)})`),
      "",
      `Subtotal: ${brl(subtotal)}`,
      mode === "retirada" ? "Retirada no balcão" : `Entrega: ${selectedArea ? `${selectedArea.name} (${brl(selectedArea.fee)})` : "bairro a confirmar"}`,
      `Total: ${brl(total)}`,
      "",
      name.trim() ? `Nome: ${name.trim()}` : "Nome:",
      mode === "entrega" ? `Endereço: ${address.trim()}` : "",
      note.trim() ? `Obs: ${note.trim()}` : "",
    ]
      .filter((line) => line !== "")
      .join("\n");
    return `https://wa.me/${WA}?text=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <img src="/logo.png" alt="" className="h-12 w-auto sm:h-16" />
            <span className="truncate font-display text-lg leading-none">
              Canto da Pizza
              <span className="mt-1 block font-sans text-xs tracking-wide text-muted">Bar · Jardim Jaqueline</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#cardapio" className="hover:text-fg">Cardápio</a>
            <a href="#entrega" className="hover:text-fg">Entrega</a>
            <a href="#contato" className="hover:text-fg">Contato</a>
          </nav>
          <a
            href={`https://wa.me/${WA}`}
            className="inline-flex h-11 items-center rounded-full bg-gold px-4 text-sm font-semibold text-ink"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="topo">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
          <div>
            <h1 className="font-display text-5xl leading-none text-fg sm:text-6xl">
              A pizza do canto, com o preço do cardápio.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Sabores, porções, bebidas e taxa por bairro do cardápio oficial. Monte o pedido e mande pronto no WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#cardapio" className="inline-flex h-12 items-center rounded-full bg-gold px-5 font-semibold text-ink">
                Ver cardápio
              </a>
              <a href="#entrega" className="inline-flex h-12 items-center rounded-full border border-line px-5 text-fg">
                Taxa do bairro
              </a>
            </div>
            <dl className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2">
              <div className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <dt className="text-fg">Horário do cardápio</dt>
                  <dd>Todos os dias, 18h às 23h45</dd>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <dt className="text-fg">Endereço</dt>
                  <dd>R. Carlantonio Carlone, 87 · Jd. Jaqueline</dd>
                </div>
              </div>
              <div className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <dt className="text-fg">WhatsApp</dt>
                  <dd>(11) 91580-9970</dd>
                </div>
              </div>
              <div className="flex gap-2">
                <Bike className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <dt className="text-fg">Entrega</dt>
                  <dd>Cerca de 45 min · taxa por bairro</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line">
            <img
              src="/hero-pizza.jpg"
              alt="Pizza de calabresa com borda recheada saindo do forno"
              className="h-80 w-full object-cover sm:h-96"
            />
          </div>
        </section>

        <section id="cardapio" className="mx-auto grid max-w-6xl gap-6 px-4 pb-28 lg:grid-cols-[minmax(0,1fr)_22rem] lg:pb-16">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold tracking-widest text-gold uppercase">Cardápio</p>
                <h2 className="font-display text-4xl">Escolha e monte</h2>
              </div>
              <p className="text-sm text-muted">{flavors.length} sabores no forno</p>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto">
              {(
                [
                  ["pizzas", "Pizzas"],
                  ["porcoes", "Porções"],
                  ["bebidas", "Bebidas"],
                  ["entrega", "Entrega"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setTab(id);
                    if (id === "entrega") {
                      document.getElementById("entrega")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className={`h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${
                    tab === id ? "bg-gold text-ink" : "bg-surface text-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab !== "entrega" && (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <label className="flex h-12 flex-1 items-center gap-2 rounded-2xl border border-line bg-surface px-3">
                  <Search className="h-4 w-4 text-muted" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={tab === "pizzas" ? "Buscar sabor ou ingrediente" : "Buscar no cardápio"}
                    className="w-full bg-transparent text-fg outline-none placeholder:text-muted"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setSortPrice((value) => !value)}
                  className={`h-12 rounded-2xl border px-4 text-sm font-semibold ${
                    sortPrice ? "border-gold text-gold" : "border-line text-muted"
                  }`}
                >
                  {sortPrice ? "Menor preço" : "Ordem A–Z"}
                </button>
              </div>
            )}

            {tab === "pizzas" && (
              <>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(["grande", "broto"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSize(option)}
                      className={`h-11 rounded-full px-4 text-sm font-semibold ${
                        size === option ? "bg-surface-2 text-fg ring-1 ring-gold" : "bg-surface text-muted"
                      }`}
                    >
                      {option === "grande" ? "Grande" : "Broto"}
                    </button>
                  ))}
                  {(
                    [
                      ["todas", "Todas"],
                      ["salgada", "Salgadas"],
                      ["doce", "Doces"],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setKind(id)}
                      className={`h-11 rounded-full px-4 text-sm ${kind === id ? "text-gold" : "text-muted"}`}
                    >
                      {label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setBuilderOpen(true)}
                    className="h-11 rounded-full bg-surface-2 px-4 text-sm font-semibold text-fg"
                  >
                    Montar 2 ou 3 sabores
                  </button>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Na grande, 2 ou 3 sabores. No broto, até 2. O valor é o do sabor mais caro. Borda recheada + {brl(BORDA_PRICE)}.
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {visibleFlavors.map((flavor) => {
                    const price = priceOf(flavor, size) ?? 0;
                    return (
                      <li key={flavor.id} className="flex flex-col rounded-2xl border border-line bg-surface p-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-2xl leading-none">{flavor.name}</h3>
                          <span className="shrink-0 font-semibold text-gold">{brl(price)}</span>
                        </div>
                        {flavor.desc ? <p className="mt-2 text-sm text-muted">{flavor.desc}</p> : null}
                        <button
                          type="button"
                          onClick={() =>
                            addLine({
                              key: `pizza:${size}:${flavor.id}:sem-borda`,
                              title: `Pizza ${size} · ${flavor.name}`,
                              detail: "1 sabor, sem borda",
                              unit: price,
                            })
                          }
                          className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gold text-sm font-semibold text-ink"
                        >
                          <Plus className="h-4 w-4" />
                          Adicionar
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {visibleFlavors.length === 0 && <p className="mt-6 text-muted">Nenhum sabor com esse filtro.</p>}
              </>
            )}

            {(tab === "porcoes" || tab === "bebidas") && (
              <ul className="mt-4 grid gap-3">
                {visibleItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gold">{item.price == null ? "Consultar" : brl(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      disabled={item.price == null}
                      onClick={() =>
                        item.price != null &&
                        addLine({
                          key: `item:${item.id}`,
                          title: item.name,
                          detail: "",
                          unit: item.price,
                        })
                      }
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-ink disabled:opacity-40"
                    >
                      <Plus className="h-4 w-4" />
                      Add
                    </button>
                  </li>
                ))}
                {visibleItems.length === 0 && <li className="text-muted">Nada encontrado.</li>}
              </ul>
            )}

            {tab === "entrega" && (
              <AreaList
                areas={visibleAreas}
                query={areaQuery}
                onQuery={setAreaQuery}
                selected={area}
                onSelect={(value) => {
                  setArea(value);
                  setMode("entrega");
                }}
              />
            )}
          </div>

          <CartPanel
            className="sticky top-24 hidden h-fit lg:block"
            lines={lines}
            mode={mode}
            area={selectedArea}
            name={name}
            address={address}
            note={note}
            subtotal={subtotal}
            fee={fee}
            total={total}
            onMode={setMode}
            onName={setName}
            onAddress={setAddress}
            onNote={setNote}
            onQty={setQty}
            onClear={() => setLines([])}
            orderHref={lines.length ? orderLink() : undefined}
          />
        </section>

        <section id="entrega" className="mx-auto max-w-6xl px-4 py-8">
          {tab !== "entrega" && (
            <>
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">Entrega</p>
              <h2 className="font-display text-4xl">Taxa por bairro</h2>
              <p className="mt-2 max-w-2xl text-muted">
                Lista ativa do cardápio. Cem bairros com taxa definida. Escolha o seu para somar no pedido.
              </p>
              <div className="mt-4">
                <AreaList
                  areas={visibleAreas}
                  query={areaQuery}
                  onQuery={setAreaQuery}
                  selected={area}
                  onSelect={(value) => {
                    setArea(value);
                    setMode("entrega");
                  }}
                />
              </div>
            </>
          )}
        </section>

        <footer id="contato" className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
            <div>
              <img src="/logo.png" alt="" className="mb-3 h-24 w-auto" />
              <p className="font-display text-2xl text-fg">Canto da Pizza Bar</p>
              <p className="mt-1">R. Carlantonio Carlone, 87 — Jardim Jaqueline, São Paulo</p>
              <p>WhatsApp (11) 91580-9970 · Fixo (11) 37528-455</p>
              <p>Instagram: @cantodapizzabar</p>
            </div>
            <a className="text-gold" href="https://wappi.delivery/cantodapizza">
              Cardápio original no Wappi
            </a>
          </div>
        </footer>
      </main>

      {count > 0 && (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="fixed inset-x-4 bottom-4 z-30 flex h-14 items-center justify-between rounded-full bg-gold px-5 font-semibold text-ink lg:hidden"
        >
          <span className="inline-flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Ver pedido · {count}
          </span>
          <span>{brl(total)}</span>
        </button>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-bg/70" aria-label="Fechar pedido" onClick={() => setCartOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-auto rounded-t-3xl border border-line bg-bg p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-3xl">Seu pedido</h2>
              <button type="button" onClick={() => setCartOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-surface" aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
            </div>
            <CartPanel
              lines={lines}
              mode={mode}
              area={selectedArea}
              name={name}
              address={address}
              note={note}
              subtotal={subtotal}
              fee={fee}
              total={total}
              onMode={setMode}
              onName={setName}
              onAddress={setAddress}
              onNote={setNote}
              onQty={setQty}
              onClear={() => setLines([])}
              orderHref={lines.length ? orderLink() : undefined}
            />
          </div>
        </div>
      )}

      {builderOpen && (
        <PizzaBuilder
          initialSize={size}
          onClose={() => setBuilderOpen(false)}
          onAdd={(line) => {
            addLine(line);
            setBuilderOpen(false);
            setCartOpen(true);
          }}
        />
      )}
    </div>
  );
}

function AreaList({
  areas,
  query,
  onQuery,
  selected,
  onSelect,
}: {
  areas: { name: string; fee: number }[];
  query: string;
  onQuery: (value: string) => void;
  selected: string;
  onSelect: (name: string) => void;
}) {
  return (
    <div>
      <label className="flex h-12 items-center gap-2 rounded-2xl border border-line bg-surface px-3">
        <Search className="h-4 w-4 text-muted" />
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Buscar bairro"
          className="w-full bg-transparent outline-none placeholder:text-muted"
        />
      </label>
      <ul className="mt-3 max-h-80 overflow-auto rounded-2xl border border-line">
        {areas.map((item) => (
          <li key={item.name}>
            <button
              type="button"
              onClick={() => onSelect(item.name)}
              className={`flex h-12 w-full items-center justify-between px-4 text-left text-sm ${
                selected === item.name ? "bg-surface-2 text-gold" : "text-fg hover:bg-surface"
              }`}
            >
              <span>{item.name}</span>
              <span>{brl(item.fee)}</span>
            </button>
          </li>
        ))}
        {areas.length === 0 && <li className="px-4 py-6 text-sm text-muted">Bairro não está na área de entrega.</li>}
      </ul>
    </div>
  );
}

function CartPanel({
  className,
  lines,
  mode,
  area,
  name,
  address,
  note,
  subtotal,
  fee,
  total,
  onMode,
  onName,
  onAddress,
  onNote,
  onQty,
  onClear,
  orderHref,
}: {
  className?: string;
  lines: Line[];
  mode: "retirada" | "entrega";
  area: { name: string; fee: number } | null;
  name: string;
  address: string;
  note: string;
  subtotal: number;
  fee: number;
  total: number;
  onMode: (mode: "retirada" | "entrega") => void;
  onName: (value: string) => void;
  onAddress: (value: string) => void;
  onNote: (value: string) => void;
  onQty: (key: string, qty: number) => void;
  onClear: () => void;
  orderHref?: string;
}) {
  return (
    <aside className={`rounded-3xl border border-line bg-surface p-4 ${className ?? ""}`}>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl">Pedido</h2>
        {lines.length > 0 && (
          <button type="button" onClick={onClear} className="text-sm text-muted">
            Limpar
          </button>
        )}
      </div>
      {lines.length === 0 ? (
        <p className="mt-4 text-sm text-muted">Nada ainda. Adicione uma pizza, porção ou bebida.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {lines.map((line) => (
            <li key={line.key} className="border-b border-line pb-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{line.title}</p>
                  {line.detail ? <p className="text-sm text-muted">{line.detail}</p> : null}
                </div>
                <p className="shrink-0 text-sm text-gold">{brl(line.unit * line.qty)}</p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <button type="button" aria-label="Diminuir" onClick={() => onQty(line.key, line.qty - 1)} className="grid h-11 w-11 place-items-center rounded-full bg-surface-2">
                  {line.qty === 1 ? <Trash2 className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                </button>
                <span className="w-6 text-center">{line.qty}</span>
                <button type="button" aria-label="Aumentar" onClick={() => onQty(line.key, line.qty + 1)} className="grid h-11 w-11 place-items-center rounded-full bg-surface-2">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        {(["entrega", "retirada"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onMode(option)}
            className={`h-11 rounded-full text-sm font-semibold ${mode === option ? "bg-gold text-ink" : "bg-surface-2 text-muted"}`}
          >
            {option === "entrega" ? "Entrega" : "Retirada"}
          </button>
        ))}
      </div>
      {mode === "entrega" && (
        <p className="mt-3 text-sm text-muted">
          {area ? `${area.name}: ${brl(area.fee)}` : "Escolha o bairro na lista para incluir a taxa."}
        </p>
      )}

      <div className="mt-4 space-y-2">
        <input value={name} onChange={(event) => onName(event.target.value)} placeholder="Seu nome" className="h-12 w-full rounded-2xl border border-line bg-bg px-3 outline-none" />
        {mode === "entrega" && (
          <input value={address} onChange={(event) => onAddress(event.target.value)} placeholder="Rua e número" className="h-12 w-full rounded-2xl border border-line bg-bg px-3 outline-none" />
        )}
        <input value={note} onChange={(event) => onNote(event.target.value)} placeholder="Observação" className="h-12 w-full rounded-2xl border border-line bg-bg px-3 outline-none" />
      </div>

      <dl className="mt-4 space-y-1 text-sm">
        <div className="flex justify-between text-muted">
          <dt>Subtotal</dt>
          <dd>{brl(subtotal)}</dd>
        </div>
        {mode === "entrega" && (
          <div className="flex justify-between text-muted">
            <dt>Taxa</dt>
            <dd>{area ? brl(fee) : "—"}</dd>
          </div>
        )}
        <div className="flex justify-between text-lg font-semibold">
          <dt>Total</dt>
          <dd>{brl(total)}</dd>
        </div>
      </dl>

      {orderHref ? (
        <a href={orderHref} target="_blank" rel="noreferrer" className="mt-4 flex h-12 items-center justify-center rounded-full bg-gold font-semibold text-ink">
          Enviar no WhatsApp
        </a>
      ) : (
        <p className="mt-4 text-center text-sm text-muted">O botão de envio aparece com o primeiro item.</p>
      )}
    </aside>
  );
}

function PizzaBuilder({
  initialSize,
  onClose,
  onAdd,
}: {
  initialSize: Size;
  onClose: () => void;
  onAdd: (line: Omit<Line, "qty">) => void;
}) {
  const [size, setSize] = useState<Size>(initialSize);
  const [picked, setPicked] = useState<string[]>([]);
  const [bordaId, setBordaId] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const max = size === "broto" ? 2 : 3;

  const choices = useMemo(() => {
    const needle = fold(filter.trim());
    return flavors
      .filter((flavor) => priceOf(flavor, size) != null)
      .filter((flavor) => !needle || fold(`${flavor.name} ${flavor.desc}`).includes(needle))
      .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [filter, size]);

  const selected = picked
    .map((id) => flavors.find((flavor) => flavor.id === id))
    .filter((flavor): flavor is Flavor => Boolean(flavor));
  const borda = bordas.find((item) => item.id === bordaId) ?? null;
  const base = selected.length ? Math.max(...selected.map((flavor) => priceOf(flavor, size) ?? 0)) : 0;
  const unit = base + (borda?.price ?? 0);
  const ready = selected.length >= 1 && selected.length <= max;

  function toggle(id: string) {
    setPicked((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= max) return current;
      return [...current, id];
    });
  }

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-bg/75" aria-label="Fechar montagem" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 flex max-h-[92vh] flex-col rounded-t-3xl border border-line bg-bg sm:inset-x-auto sm:top-8 sm:bottom-8 sm:left-1/2 sm:w-[40rem] sm:-translate-x-1/2 sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <h2 className="font-display text-3xl">Montar pizza</h2>
            <p className="text-sm text-muted">
              {picked.length}/{max} sabores · valor do mais caro
            </p>
          </div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full bg-surface" aria-label="Fechar">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex gap-2 px-4 pt-3">
          {(["grande", "broto"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSize(option);
                setPicked((current) => current.slice(0, option === "broto" ? 2 : 3).filter((id) => {
                  const flavor = flavors.find((item) => item.id === id);
                  return flavor ? priceOf(flavor, option) != null : false;
                }));
              }}
              className={`h-11 rounded-full px-4 text-sm font-semibold ${size === option ? "bg-gold text-ink" : "bg-surface text-muted"}`}
            >
              {option === "grande" ? "Grande · até 3" : "Broto · até 2"}
            </button>
          ))}
        </div>
        <label className="mx-4 mt-3 flex h-12 items-center gap-2 rounded-2xl border border-line bg-surface px-3">
          <Search className="h-4 w-4 text-muted" />
          <input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Buscar sabor" className="w-full bg-transparent outline-none placeholder:text-muted" />
        </label>
        <ul className="mt-3 flex-1 space-y-1 overflow-auto px-4">
          {choices.map((flavor) => {
            const on = picked.includes(flavor.id);
            const price = priceOf(flavor, size) ?? 0;
            return (
              <li key={flavor.id}>
                <button
                  type="button"
                  onClick={() => toggle(flavor.id)}
                  className={`flex min-h-12 w-full items-center justify-between rounded-2xl px-3 py-2 text-left ${on ? "bg-surface-2 ring-1 ring-gold" : "hover:bg-surface"}`}
                >
                  <span>
                    <span className="block font-semibold">{flavor.name}</span>
                    {flavor.desc ? <span className="block text-sm text-muted">{flavor.desc}</span> : null}
                  </span>
                  <span className="ml-3 shrink-0 text-gold">{brl(price)}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-line p-4">
          <p className="text-sm text-muted">Borda recheada</p>
          <div className="mt-2 flex gap-2 overflow-x-auto">
            <button type="button" onClick={() => setBordaId(null)} className={`h-11 shrink-0 rounded-full px-3 text-sm ${bordaId == null ? "bg-gold text-ink" : "bg-surface text-muted"}`}>
              Sem borda
            </button>
            {bordas.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setBordaId(item.id)}
                className={`h-11 shrink-0 rounded-full px-3 text-sm ${bordaId === item.id ? "bg-gold text-ink" : "bg-surface text-muted"}`}
              >
                {item.name.replace("Borda de ", "").replace("Borda ", "")} +{brl(item.price)}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!ready}
            onClick={() => {
              if (!ready) return;
              const names = selected.map((flavor) => flavor.name).join(" / ");
              onAdd({
                key: `pizza:${size}:${[...picked].sort().join("+")}:${bordaId ?? "sem"}`,
                title: `Pizza ${size} · ${names}`,
                detail: `${selected.length} sabor${selected.length > 1 ? "es" : ""}${borda ? ` · ${borda.name}` : ""}`,
                unit,
              });
            }}
            className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-gold font-semibold text-ink disabled:opacity-40"
          >
            {ready ? `Adicionar · ${brl(unit)}` : "Escolha pelo menos 1 sabor"}
          </button>
        </div>
      </div>
    </div>
  );
}
