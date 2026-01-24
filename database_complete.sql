--
-- PostgreSQL database dump
--

\restrict TJp3eYBVw9lnL65wefj6RbJ2pAh6WYu6Ctfc9rxAY8F2mgZSJuS9OwYVy2WIwd3

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bewerbungen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bewerbungen (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    geschlecht character varying(50),
    name character varying(255) NOT NULL,
    street character varying(255),
    city character varying(255),
    tel_number character varying(50),
    mail character varying(255) NOT NULL,
    birth_date date,
    abschluss character varying(255),
    berufserfahrung text,
    sprachen text,
    verfuegbarkeit character varying(100),
    schichtbereitschaft text[],
    fuehrerschein character varying(50),
    fuehrerschein_klasse character varying(50),
    it_kenntnisse text[],
    zertifikate text[],
    gehaltsvorstellung character varying(100),
    motivation text,
    job_slug character varying(255),
    job_title character varying(255),
    lebenslauf_url text,
    anschreiben_url text,
    zertifikate_upload_url text,
    newsletter boolean DEFAULT false,
    datenschutz boolean DEFAULT false,
    status character varying(50) DEFAULT 'neu'::character varying
);


ALTER TABLE public.bewerbungen OWNER TO postgres;

--
-- Name: user_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_profiles (
    id uuid NOT NULL,
    email text NOT NULL,
    role text DEFAULT 'admin'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.user_profiles OWNER TO postgres;

--
-- Data for Name: bewerbungen; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.bewerbungen VALUES ('306066b2-5f48-4eaf-b0c2-de19ba636cb2', '2026-01-23 13:28:33.644268+00', NULL, 'Moeller, Anna', 'Lieblingsstraße 1', '34353, Zuffenhausen', '+49 0172 66257688', 'anna.moeller@gmail.com', '2006-01-10', 'Master', '0-1', 'Deutsch, Daenisch', '2026-01-25', '{Spät,Nacht}', 'ja', 'C1', '{Kassensystem,Reservierungssystem}', '{Ersthelfer,Brandschutz}', '38.000', 'Ich würde sehr gerne bei euch arbeiten.', 'chef-de-rang', 'Chef de Rang (m/w/d)', 'anna.moeller@gmail.com/1769174911509_Datenbanken__bung_4.docx', NULL, NULL, false, true, 'eingegangen');
INSERT INTO public.bewerbungen VALUES ('65e7f06f-78ce-415c-84eb-4b93925440ae', '2026-01-23 08:33:41.743846+00', NULL, 'Jana Meyer', 'Schaumburgstraße 45', '24789 Nordstadt', '+491547896', 'j.meyer@email.com', '1991-11-11', 'Ausbildung', '3-5', 'Deutsch, Englisch', '2026-04-01', '{Spät,Früh}', NULL, NULL, '{"MS Office",PMS}', '{Hygiene,Ersthelfer}', '35.000', NULL, 'chef-de-rang', 'Chef de Rang (m/w/d)', 'j.meyer@email.com/1769157220168_Lebenslauf_JanaMeyer.docx', NULL, NULL, false, true, 'eingegangen');
INSERT INTO public.bewerbungen VALUES ('7587745e-1da5-4483-bb35-3864595c692a', '2026-01-22 20:22:04.134315+00', NULL, 'Hartmann, Lisa', 'Koelner Str. 84', '22222 Bielefeld', '+49 163648464374', 'lisa.hartmann@gmail.com', '2008-01-05', 'Realschulabschluss', '1-3', 'Deutsch', '2026-01-29', '{Nacht,Wochenende}', 'nein', NULL, '{"MS Office",Reservierungssystem}', '{Brandschutz,Ausbildereignung}', '37.000', 'ich will hier arbeiten', 'chef-de-rang', 'Chef de Rang (m/w/d)', 'lisa.hartmann@gmail.com/1769113322114_StatistikEinsendeaufgabe2.pdf', NULL, NULL, true, true, 'eingegangen');
INSERT INTO public.bewerbungen VALUES ('30e3b9b8-717a-4b3f-b401-7b323c5c3227', '2026-01-22 17:50:31.549996+00', NULL, 'Mueller, Lars', 'Mühelenstraße 1', '25235 Schoenhausen', '+49 1473894735373', 'lisa.mueller@gmail.com', '2005-04-03', 'Abitur', '0-1', 'Deutsch, Italienisch', '2026-01-25', '{Spät,Nacht}', 'nein', NULL, '{PMS}', '{Ausbildereignung}', '40.000', 'Ich würde bei euch gerne arbeiten.', 'rezeptionist', 'Rezeptionist (m/w/d)', 'lisa.mueller@gmail.com/1769104230010_Statistik_Einsendeaufgabe_4.pdf', NULL, NULL, true, true, 'in_prüfung');
INSERT INTO public.bewerbungen VALUES ('562a1c61-e3e5-472b-9b3b-b0ee8ecb7e03', '2026-01-22 17:39:31.528604+00', NULL, 'Linder, Lucia', 'Sörensenstraße 16', '24143, Kiel', '+49 15153241277', 'lucia.linder@gmail.com', '2026-01-27', 'Abitur', '1-3', 'Deutsch', '2026-01-31', '{Früh,Wochenende}', 'ja', 'B', '{"MS Office",Kassensystem}', '{Hygiene,Ersthelfer}', '40.000', 'Ich möchte hier arbeiten', 'chef-de-rang', 'Chef de Rang (m/w/d)', 'lucia.linder@gmail.com/1769103570675_Datenbanken__bung_4.docx', NULL, NULL, true, true, 'abgelehnt');
INSERT INTO public.bewerbungen VALUES ('d71121b3-d0fc-4fc1-95ef-50d3f42ba1e9', '2026-01-24 08:58:49.870619+00', NULL, 'Krümel Monster', 'Kuchenweg 303', '12345 Tortentown', '01234 5678910', 'Kruemel.immer.kuchen.viel@torte.com', '0007-02-01', 'SSonstiges', '10+', 'Liebe', '2026-01-24', '{}', 'ja', NULL, '{"MS Office"}', '{Hygiene,Ersthelfer}', '1000000000', 'Ich hab bock und hunger!', 'chef-de-rang', 'Chef de Rang (m/w/d)', 'Kruemel.immer.kuchen.viel@torte.com/1769245128377_Lebenslauf_Kruemelmonster.docx', NULL, NULL, true, true, 'eingeladen');
INSERT INTO public.bewerbungen VALUES ('b475139c-8b50-44a7-a5cf-bb2aa8453e71', '2026-01-24 09:59:58.868991+00', NULL, 'Tanja Schubert', 'Großer Weg 3', '24859 Großhausen', '+49158789632', 'tanjaIstToll@email.com', '2007-05-04', 'Realschulabschluss', '0-1', 'Deutsch, Spanisch', '2026-05-15', '{Spät,Nacht}', 'nein', NULL, '{"MS Office"}', '{}', '35.000', NULL, 'housekeeping-supervisor', 'Housekeeping Supervisor (m/w/d)', 'tanjaIstToll@email.com/1769248797133_Lebenslauf_TanjaIstToll.docx', NULL, NULL, false, true, 'zugesagt');


--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_profiles VALUES ('519f4cc7-ed46-4c16-8251-5c574e09c87a', 'admin@hotelexcellence.de', 'admin', '2026-01-23 14:05:10.049492+00');


--
-- Name: bewerbungen bewerbungen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bewerbungen
    ADD CONSTRAINT bewerbungen_pkey PRIMARY KEY (id);


--
-- Name: user_profiles user_profiles_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_email_key UNIQUE (email);


--
-- Name: user_profiles user_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_pkey PRIMARY KEY (id);


--
-- Name: idx_bewerbungen_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_bewerbungen_created_at ON public.bewerbungen USING btree (created_at);


--
-- Name: idx_bewerbungen_mail; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_bewerbungen_mail ON public.bewerbungen USING btree (mail);


--
-- Name: user_profiles user_profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: bewerbungen Admins can delete bewerbungen; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Admins can delete bewerbungen" ON public.bewerbungen FOR DELETE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.id = auth.uid()) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: bewerbungen Admins can update bewerbungen; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Admins can update bewerbungen" ON public.bewerbungen FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.id = auth.uid()) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: user_profiles Admins can view all profiles; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Admins can view all profiles" ON public.user_profiles FOR SELECT TO authenticated USING ((role = 'admin'::text));


--
-- Name: bewerbungen Allow anon insert on bewerbungen; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Allow anon insert on bewerbungen" ON public.bewerbungen FOR INSERT TO anon WITH CHECK (true);


--
-- Name: bewerbungen Bewerbungen können erstellt werden; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Bewerbungen können erstellt werden" ON public.bewerbungen FOR INSERT TO authenticated, anon WITH CHECK (true);


--
-- Name: bewerbungen Nur Admins können Bewerbungen lesen; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Nur Admins können Bewerbungen lesen" ON public.bewerbungen FOR SELECT TO authenticated USING (false);


--
-- Name: bewerbungen Only admins can view bewerbungen; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Only admins can view bewerbungen" ON public.bewerbungen FOR SELECT TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.id = auth.uid()) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: bewerbungen; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.bewerbungen ENABLE ROW LEVEL SECURITY;

--
-- Name: bewerbungen policy_name; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY policy_name ON public.bewerbungen FOR INSERT TO anon WITH CHECK (true);


--
-- Name: user_profiles; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: TABLE bewerbungen; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.bewerbungen TO anon;
GRANT ALL ON TABLE public.bewerbungen TO authenticated;
GRANT ALL ON TABLE public.bewerbungen TO service_role;


--
-- Name: TABLE user_profiles; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.user_profiles TO anon;
GRANT ALL ON TABLE public.user_profiles TO authenticated;
GRANT ALL ON TABLE public.user_profiles TO service_role;


--
-- PostgreSQL database dump complete
--

\unrestrict TJp3eYBVw9lnL65wefj6RbJ2pAh6WYu6Ctfc9rxAY8F2mgZSJuS9OwYVy2WIwd3

