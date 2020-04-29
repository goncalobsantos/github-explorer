import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
	repository: string;
}

interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
}

interface Issue {
	id: number;
	title: string;
	user: {
		login: string;
	};
	html_url: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();
	const [repository, setRepository] = useState<Repository | null>(null);
	const [issues, setIssues] = useState<Issue[]>([]);

	useEffect(() => {
		api.get(`repos/${params.repository}`).then((response) => {
			setRepository(response.data);
		});

		api.get(`repos/${params.repository}/issues`).then((response) => {
			setIssues(response.data);
		});
	}, [params.repository]);

	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={20} /> Voltar
				</Link>
			</Header>
			{repository && (
				<RepositoryInfo>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<p className="bold-text">{repository.full_name}</p>
							<p>{repository.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<p className="bold-text">{repository.stargazers_count}</p>
							<span>Stars</span>
						</li>
						<li>
							<p className="bold-text">{repository.forks_count}</p>
							<span>Forks</span>
						</li>
						<li>
							<p className="bold-text">{repository.open_issues_count}</p>
							<span>Issues abertos</span>
						</li>
					</ul>
				</RepositoryInfo>
			)}
			<Issues>
				{issues.map((issue) => (
					<a
						key={issue.id}
						href={issue.html_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<p className="bold-text">{issue.title}</p>
							<p>{issue.user.login}</p>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Issues>
		</>
	);
};

export default Repository;
